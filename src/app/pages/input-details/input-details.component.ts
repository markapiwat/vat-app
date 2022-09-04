import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OneService } from 'src/app/services/one/one.service';


@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.scss']
})
export class InputDetailsComponent implements OnInit {

  radioValue = '0';

  monthValue = [];

  yearValue = [] ;

  saleValueResult?: number ;
  
  taxValue?:number;

  SurchargeValue?:number;


  constructor(public one: OneService) { }

  ngOnInit(): void {
  }
  saleAmount(msg: any){
    console.log(msg);
    this.saleValueResult = msg
  }

  saleTotax(saleValueResult: any){
    const vatPercent = 0.07;
    return saleValueResult * vatPercent;
  }

  taxToSurcharge(taxValue: any){
    const surPercent = 0.1;
    return taxValue * surPercent;
  }
  
  taxAmount(taxValue: any){
    const penalty = this.one.penalty;
   return this.SurchargeValue + taxValue + penalty;
  }
 

  getSurcharge(msg:any){
    this.SurchargeValue = msg
  }

  getselect(msg:any){
    console.log(msg);
    this.radioValue = msg
  }

  getTaxValue(msg:any){
    console.log(msg);
    this.taxValue = msg
  }

}