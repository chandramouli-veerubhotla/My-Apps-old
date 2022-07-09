import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterestCalculatorComponent } from './components/interest-calculator/interest-calculator.component';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvestimentComponent } from './components/investiment/investiment.component';
import { SukraSidhanthamSettingsComponent } from './components/sukra-sidhantham-settings/sukra-sidhantham-settings.component';
import { SukraSidhanthamDashboardComponent } from './components/sukra-sidhantham-dashboard/sukra-sidhantham-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AnandadiYogamDashboardComponent } from './components/anandadi-yogam-dashboard/anandadi-yogam-dashboard.component';
import { AnandadiYogamSettingsComponent } from './components/anandadi-yogam-settings/anandadi-yogam-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    InterestCalculatorComponent,
    InvestimentComponent,
    SukraSidhanthamSettingsComponent,
    SukraSidhanthamDashboardComponent,
    AnandadiYogamDashboardComponent,
    AnandadiYogamSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
