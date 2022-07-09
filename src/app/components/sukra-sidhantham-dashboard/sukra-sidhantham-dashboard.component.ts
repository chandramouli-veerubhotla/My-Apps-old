import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hora, SukraSidhanthamService } from 'src/app/services/sukra-sidhantham.service';
import { SukraSidhanthamSettingsComponent, Settings } from '../sukra-sidhantham-settings/sukra-sidhantham-settings.component';


@Component({
  selector: 'app-sukra-sidhantham-dashboard',
  templateUrl: './sukra-sidhantham-dashboard.component.html',
  styleUrls: ['./sukra-sidhantham-dashboard.component.scss']
})
export class SukraSidhanthamDashboardComponent implements OnInit {

  sunrise!: Date
  sunset!: Date
  settings!: Settings;
  isDayTime: boolean = true;
  horas: Hora[] = [];

  constructor(
    private _snackBar: MatSnackBar,
    private service: SukraSidhanthamService,
    private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    this.openSettings()
  }

  openSettings() {
    this._bottomSheet.open(SukraSidhanthamSettingsComponent, {panelClass: 'rounded-t-xl'}).afterDismissed().subscribe(resp => {
      if (resp != null) {
        this.settings = resp
        this.applySettings(this.settings, this.isDayTime)
      }
    })
  }

  applySettings(settings: Settings, isDayTime: boolean = true) {
    let details = this.service.calcSukraHora(settings.date, settings.lat, settings.lng, isDayTime)
    this.sunrise = details.sunrise
    this.sunset = details.sunset
    this.horas = details.horas
    this._snackBar.open("Successfully calculated horas!...", 'OK')
  }

}
