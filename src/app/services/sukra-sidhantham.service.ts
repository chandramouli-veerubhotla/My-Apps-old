import { Injectable } from '@angular/core';
import { Time } from './time'
import * as sunCalc from 'suncalc';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as sukraHoraDetails from '../../assets/sukra-hora.json';


export interface Hora {
  id: number
  start: Date
  end: Date
  prediction: any
}

export interface DayDetails {
  date: Date
  sunrise: Date
  sunset: Date
}

export interface SukraHora {
  id: number
  details: DayDetails
  dayTimings: Array<Hora>
  nightTimings: Array<Hora>
}


@Injectable({
  providedIn: 'root'
})
export class SukraSidhanthamService {

  constructor(private http: HttpClient) { }

  private getHoraDetails(): Observable<any> {
    return this.http.get("./assets/sukra-hora.json");
  }

  // get location of the device using device sensors
  public getPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve(resp)
      }, error => {
        reject(error)
      })
    })
  }

  public onlyDate(d: Date): Date {
    let date = new Date(d.getTime())
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    return date
  }


  private diffTime(s1: Date, s2: Date): Time {
    let diff = s1.getTime() - s2.getTime()
    let time = new Time()
    time = time.fromTotalMilliSeconds(diff)
    return time
  }

  public getSunriseSunset(date: Date, lat: number, lng: number) {
    let details = sunCalc.getTimes(this.onlyDate(date), lat, lng)
    return {'sunrise': details.sunrise, 'sunset': details.sunset}

  }

  private findTimes(date: Date, lat: number, lng: number) {
    let todaySunriseSunset = this.getSunriseSunset(date, lat, lng)
    let dayTime = this.diffTime(todaySunriseSunset.sunset, todaySunriseSunset.sunrise)

    let nextDate = new Date(date)
    nextDate.setDate(nextDate.getDate() + 1)
    let tmrwSunriseSunset = this.getSunriseSunset(nextDate, lat, lng)
    let nightTime = this.diffTime(tmrwSunriseSunset.sunrise, todaySunriseSunset.sunset)

    return {'today': todaySunriseSunset, 'tommorw': tmrwSunriseSunset, 'dayTime': dayTime, 'nightTime': nightTime}
  }

  private calculateHoras(time: number, todayTime: number, day: number): Array<Hora> {
    let horaMilliSeconds = time / 30  
    let resp = Array<Hora>();
    let details: any = sukraHoraDetails[day]
    for (let idx = 0; idx < 30; idx++) {
      // create new date object for each hora
      let startHora = new Date(todayTime + (horaMilliSeconds * idx))
      let endHora = new Date(todayTime + (horaMilliSeconds * (idx+1)))

      resp.push({'id': idx, 'start': startHora, 'end': endHora, 'prediction': details[idx+1]})
    }
    return resp
  }


  public calcSukraHora(date: Date, lat: number, lng: number, isDay: boolean = true) {
    let horas = Array<Hora>();

    let times = this.findTimes(date, lat, lng)
    let day = date.getDay()
    if (isDay) {
      let dayHoras = this.calculateHoras(times.dayTime.totalMilliSeconds, times.today.sunrise.getTime(), day)
      horas.push(...dayHoras)
    } else {
      let nightHoras = this.calculateHoras(times.nightTime.totalMilliSeconds, times.today.sunset.getTime(), day)
      horas.push(...nightHoras)
    }
    return {'sunrise': times.today.sunrise, 'sunset': times.today.sunset, 'horas': horas}
  }
}
