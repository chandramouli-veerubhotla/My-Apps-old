import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Investiment, InvestimentComponent } from '../investiment/investiment.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';

export interface ExpectedInvestiment {
  details: Investiment,
  interest: number,
  total: number
}

@Component({
  selector: 'app-interest-calculator',
  templateUrl: './interest-calculator.component.html',
  styleUrls: ['./interest-calculator.component.scss']
})
export class InterestCalculatorComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  returnsPercentage: number = 0.;  // per day
  totalInterest: number = 0;
  total: number =0;
  allInvestments: ExpectedInvestiment[] = [

  ]

  ngOnInit(): void {
  }

  applySettings(value: string) {
    let percentage = Number(value)
    if (percentage > 0 && percentage <= 100) {
      this.returnsPercentage = percentage / 36500
      this.addInvestment()
    } else {
      this.returnsPercentage = 0.
    }
  }

  calculate(investment: Investiment): ExpectedInvestiment {
    let interest = Math.floor(this.returnsPercentage * (investment.totalDays * investment.investedAmount));
    let total = (Number(investment.investedAmountType)) * (investment.investedAmount + interest)
    return {'details': investment, 'interest': (Number(investment.investedAmountType)) * interest, 'total': total}
  }

  panelOpenState = false;

  deleteInvestment(index: number) {
    let investment = this.allInvestments[index]
    if (investment != null) {
      this.allInvestments.splice(index, 1)

      this.totalInterest -= investment.interest
      this.total -= investment.total
    }
  }


  addInvestment() {
    this._bottomSheet.open(InvestimentComponent, {panelClass: 'rounded-t-xl'}).afterDismissed().subscribe(resp => {
      if (resp != null) {
        let expected = this.calculate(resp)
        this.allInvestments.push(expected)

        this.total += expected.total
        this.totalInterest += expected.interest
      }
    })
  }

}
