import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AnandadiYogamService } from 'src/app/services/anandadi-yogam.service';
import { AnandadiYogamSettingsComponent } from '../anandadi-yogam-settings/anandadi-yogam-settings.component';

@Component({
  selector: 'app-anandadi-yogam-dashboard',
  templateUrl: './anandadi-yogam-dashboard.component.html',
  styleUrls: ['./anandadi-yogam-dashboard.component.scss']
})
export class AnandadiYogamDashboardComponent implements OnInit {

  todayNakshatraIdx: number = -1
  constructor(
    private service: AnandadiYogamService,
    private _bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
    this.openSettings()
  }

  openSettings() {
    this._bottomSheet.open(AnandadiYogamSettingsComponent, {panelClass: 'rounded-t-xl'}).afterDismissed().subscribe(resp => {
      if (resp != null) {
        this.todayNakshatraIdx = resp['todayNakshatraIdx']
      }
    })
  }



}
