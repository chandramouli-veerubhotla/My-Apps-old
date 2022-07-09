import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Nakshatras } from 'src/app/services/nakshatras';


export interface AnandadiYogamSettings {
  nakshatraIdx: number,
  day: number
}


@Component({
  selector: 'app-anandadi-yogam-settings',
  templateUrl: './anandadi-yogam-settings.component.html',
  styleUrls: ['./anandadi-yogam-settings.component.scss']
})
export class AnandadiYogamSettingsComponent implements OnInit {

  public nakshatras: Array<string> = [];
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  detailsForm: FormGroup = new FormGroup({
    'nakshatraIdx': new FormControl<Number>(0, {nonNullable: true}),
    'day': new FormControl<Number>(0, {nonNullable: true})
  })

  constructor(private _bottomSheetRef: MatBottomSheetRef<AnandadiYogamSettingsComponent>,) {    
  }

  ngOnInit(): void {
    this.nakshatras = new Nakshatras().normalNakshatrasWithAbhijeet()
  }

  apply() {
    if (this.detailsForm.valid) {
      return this._bottomSheetRef.dismiss(this.detailsForm.value)
    }
    return this._bottomSheetRef.dismiss(null)
  }

}
