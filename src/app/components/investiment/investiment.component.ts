import { Component, OnInit } from '@angular/core';
import { Subject  } from 'rxjs';
import { Input, Output, EventEmitter} from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

export interface Investiment {
  investedAmountType: number,
  investedAmount: number,
  investedDate: Date,
  investedDateHelper: string,
  tillDate: Date,
  tillDateHelper: string,
  totalDays: number
}

@Component({
  selector: 'app-investiment',
  templateUrl: './investiment.component.html',
  styleUrls: ['./investiment.component.scss']
})
export class InvestimentComponent implements OnInit {

  investimentForm: UntypedFormGroup = new UntypedFormGroup({
    investedAmountType: new UntypedFormControl('1', [Validators.required]),
    investedAmount: new UntypedFormControl('', [Validators.required, Validators.min(0)]),
    investedDate: new UntypedFormControl(this.getToday(), [Validators.required]),
    investedDateHelper: new UntypedFormControl('today'),
    tillDate: new UntypedFormControl(this.getFYEnd(), [Validators.required]),
    tillDateHelper: new UntypedFormControl('fy'),
    totalDays: new UntypedFormControl(0, [Validators.min(0)])
  })

  constructor(private _bottomSheetRef: MatBottomSheetRef<InvestimentComponent>) { }

  addInvestiment() {
    this.setTotalDays()
    if (this.investimentForm.valid) {
      return this._bottomSheetRef.dismiss(this.investimentForm.value)
    }
    return this._bottomSheetRef.dismiss(null)
  }

  setInvestmentAmontType(value: string) {
    this.investimentForm.controls['investedAmountType'].setValue(value)
  }

  

  setTotalDays() {
    let investedDate = this.investimentForm.controls['investedDate'].value
    let tillDate = this.investimentForm.controls['tillDate'].value

    let diff = Math.abs(tillDate.getTime() - investedDate.getTime());
    let diffDays = Math.ceil(diff / (1000 * 3600 * 24)) + 1; 
    if (diffDays >= 0) {
      this.investimentForm.controls['totalDays'].setValue(diffDays)
    }
  }

  addAnother() {
    this.setTotalDays()
    if (this.investimentForm.valid) {
      //this.newInvestiment.emit(this.investimentForm.value)
    }
  }


  getToday() {
    return new Date()
  }

  getFYEnd() {
    let today = new Date()

    let year = today.getFullYear()
    if (today.getMonth() > 2) {
      year += 1
    }

    let fy = new Date(year, 2, 31)
    return fy
  }

  getFYStart() {
    let today = new Date()

    let year = today.getFullYear()
    if (today.getMonth() < 2) {
      year -= 1
    }

    let fy = new Date(year, 3, 1)
    return fy
  }

  setToday(control: string) {
    this.investimentForm.controls[control].setValue(this.getToday())
  }

  setStartFY(control: string) {
    this.investimentForm.controls[control].setValue(this.getFYStart())
  }

  setEndFY(control: string) {
    this.investimentForm.controls[control].setValue(this.getFYEnd())
  }

  setYears(control: string, years: number) {
    let date = new Date()
    date.setFullYear(date.getFullYear() + years)
    this.investimentForm.controls[control].setValue(date)

  }

  ngOnInit(): void {
    
  }

}
