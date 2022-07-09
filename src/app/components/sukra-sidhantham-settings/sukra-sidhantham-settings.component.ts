import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SukraSidhanthamService } from 'src/app/services/sukra-sidhantham.service';
import {Nakshatras } from '../../services/nakshatras'

export interface Coordinates {
  lat: number,
  lng: number
}

export interface Settings {
  lat: number,
  lng: number,
  date: Date
}

@Component({
  selector: 'app-sukra-sidhantham-settings',
  templateUrl: './sukra-sidhantham-settings.component.html',
  styleUrls: ['./sukra-sidhantham-settings.component.scss']
})
export class SukraSidhanthamSettingsComponent implements OnInit {

  constructor(
    private _snakBar: MatSnackBar,
    private _bottomSheetRef: MatBottomSheetRef<SukraSidhanthamSettingsComponent>,
    private service: SukraSidhanthamService) { }

  autoDetectAcc: number = -1
  manual: Boolean = false
  detailsForm: UntypedFormGroup = new UntypedFormGroup({
    'lat': new UntypedFormControl('', [Validators.required]),
    'lng': new UntypedFormControl('', [Validators.required]),
    'date': new UntypedFormControl(new Date(), [Validators.required])
  })

  knownLocations = [
    {
      name: 'Bantumilli',
      geoCoordinates: {
        'lat': 16.3703,
      'lng': 81.2714
      }
    }
  ]

  ngOnInit(): void {
  }

  updateLatLong(coordinates: Coordinates) {
   this.detailsForm.controls['lat'].setValue(coordinates.lat)
   this.detailsForm.controls['lng'].setValue(coordinates.lng)
  }

  autoDetect() {
    this.service.getPosition().then(position => {
      this.autoDetectAcc = position.coords.accuracy
      if (position.coords.accuracy < 200) {
        this.updateLatLong({'lat': position.coords.latitude, 'lng': position.coords.longitude})
        this.manual = false
      } else {
        this._snakBar.open('Failing to find your exact location.', undefined, {duration: 3000, panelClass: 'snackbar'})
        this.manual = true
      }      
    })
  }

  calculate() {
   return this._bottomSheetRef.dismiss(this.detailsForm.value)
  }

}
