import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnandadiYogamDashboardComponent } from './components/anandadi-yogam-dashboard/anandadi-yogam-dashboard.component';
import { InterestCalculatorComponent } from './components/interest-calculator/interest-calculator.component';
import { SukraSidhanthamDashboardComponent } from './components/sukra-sidhantham-dashboard/sukra-sidhantham-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: InterestCalculatorComponent
  }, 
  {
    path: 'sukra-sidhandham',
    component: SukraSidhanthamDashboardComponent
  },
  {
    path: 'anandadi-yogam',
    component: AnandadiYogamDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
