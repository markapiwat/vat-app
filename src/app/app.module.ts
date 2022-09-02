import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

import { OneService } from './services/one/one.service';
import { TwoService } from './services/two/two.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';

import { InputDetailsComponent } from './pages/input-details/input-details.component';
import { ReviewConfirmComponent } from './pages/review-confirm/review-confirm.component';
import { FillingTypeComponent } from './components/filling-type/filling-type.component';
import { SaleAmountComponent } from './components/sale-amount/sale-amount.component';
import { TaxAmountComponent } from './components/tax-amount/tax-amount.component';
import { SurchargeComponent } from './components/surcharge/surcharge.component';
import { PenaltyComponent } from './components/penalty/penalty.component';
import { TotalAmountComponent } from './components/total-amount/total-amount.component';
import { MonthComponent } from './components/month/month.component';
import { YearComponent } from './components/year/year.component';
import { TypefillComponent } from './components/typefill/typefill.component';




//import { SurchargeComponent } from './components/surcharge/surcharge.component';
//import { PenaltyComponent } from './components/penalty/penalty.component';
//import { TotalAmountComponent } from './components/total-amount/total-amount.component';
const appRouters: Routes = [
  { path: '', component: InputDetailsComponent },
  { path: 'review', component: ReviewConfirmComponent },

]

const mat = [

  MatToolbarModule,
  MatIconModule,
  MatRadioModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputDetailsComponent,
    ReviewConfirmComponent,
    FillingTypeComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
    MonthComponent,
    YearComponent,
    TypefillComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouters),
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NoopAnimationsModule,
    CommonModule,
    ...mat

  ],
  exports: [
    ...mat

  ],


  providers: [OneService, TwoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
