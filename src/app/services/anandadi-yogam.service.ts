import { Injectable } from '@angular/core';
import * as yogamDetails from '../../assets/anandadi-yogam.json'


export interface AnandadiYogam {
  yogam: string,
  days: number,
  results: string,
  resultCode: number
}

@Injectable({
  providedIn: 'root'
})
export class AnandadiYogamService {

  startPos = [0, 4, 8, 12, 16, 20, 24]
  total = 28
  constructor() { }

  public findYogam(nakshatraIdx: number, day: number): AnandadiYogam {
    let loc = (this.total - this.startPos[day]) + nakshatraIdx
    if (loc >= 28) {
      loc -= 28
    }
    return yogamDetails[loc]
  }
}
