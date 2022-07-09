import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AnandadiYogamService, AnandadiYogam } from 'src/app/services/anandadi-yogam.service';
import { Nakshatras } from 'src/app/services/nakshatras';
import { AnandadiYogamSettingsComponent, AnandadiYogamSettings } from '../anandadi-yogam-settings/anandadi-yogam-settings.component';


@Component({
  selector: 'app-anandadi-yogam-dashboard',
  templateUrl: './anandadi-yogam-dashboard.component.html',
  styleUrls: ['./anandadi-yogam-dashboard.component.scss']
})
export class AnandadiYogamDashboardComponent implements OnInit {

  settings!: AnandadiYogamSettings
  results!: AnandadiYogam
  nakshatra!: string
  days: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  day!: string
  constructor(
    private service: AnandadiYogamService,
    private _bottomSheet: MatBottomSheet
  ) { 
  }

  ngOnInit(): void {
    this.openSettings()
  }

  public apply() {
    this.results = this.service.findYogam(this.settings.nakshatraIdx, this.settings.day)
    this.nakshatra = new Nakshatras().normalNakshatrasWithAbhijeet()[this.settings.nakshatraIdx]
    this.day = this.days[this.settings.day]
  }

  openSettings() {
    this._bottomSheet.open(AnandadiYogamSettingsComponent, {panelClass: 'rounded-t-xl'}).afterDismissed().subscribe(resp => {
      if (resp != null) {
        this.settings = resp
        this.apply()
      }
    })
  }



}
