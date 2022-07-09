import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Nakshatras } from 'src/app/services/nakshatras';

@Component({
  selector: 'app-anandadi-yogam-settings',
  templateUrl: './anandadi-yogam-settings.component.html',
  styleUrls: ['./anandadi-yogam-settings.component.scss']
})
export class AnandadiYogamSettingsComponent implements OnInit {

  public nakshatras: Array<string> = [];
  detailsForm: FormGroup = new FormGroup({
    'todayNakshatraIdx': new FormControl(0, [Validators.required, Validators.min(0)])
  })

  constructor(private _bottomSheetRef: MatBottomSheetRef<AnandadiYogamSettingsComponent>,) {    
  }

  ngOnInit(): void {
    this.nakshatras = new Nakshatras().nakshatras()
  }

  apply() {
    if (this.detailsForm.valid) {
      return this._bottomSheetRef.dismiss(this.detailsForm.value)
    }
    return this._bottomSheetRef.dismiss(null)
  }

}
