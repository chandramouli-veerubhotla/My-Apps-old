import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnandadiYogamDashboardComponent } from './components/anandadi-yogam-dashboard/anandadi-yogam-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InterestCalculatorComponent } from './components/interest-calculator/interest-calculator.component';
import { SukraSidhanthamDashboardComponent } from './components/sukra-sidhantham-dashboard/sukra-sidhantham-dashboard.component';
import { TarabalamComponent } from './components/tarabalam/tarabalam.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }, 
  {
    path: 'interest-calculator',
    component: InterestCalculatorComponent
  },
  {
    path: 'sukra-sidhandtham',
    component: SukraSidhanthamDashboardComponent
  },
  {
    path: 'anandadi-yogam',
    component: AnandadiYogamDashboardComponent
  },
  {
    path: 'tarabalam',
    component: TarabalamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
