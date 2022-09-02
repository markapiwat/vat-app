import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-input-details',
  templateUrl: './input-details.component.html',
  styleUrls: ['./input-details.component.scss']
})
export class InputDetailsComponent implements OnInit {


  monthValue = [];

  yearValue = [] ;

  saleValueResult?: number ;

  taxValueResult?: number;

  radioValue = '0';
  
  taxValue?:number;

  constructor(
    private router: Router
  ) { }

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

  taxToSurcharge(taxValueResult: any){
    const vatPercent = 0.1;
    return taxValueResult * vatPercent;
  }

  getselect(msg:any){
    console.log(msg);
    this.radioValue = msg
  }

  getmonthValue(msg: any){
    console.log(msg)
    this.monthValue = msg
  }

  getYearValue(msg: any){
    console.log(msg)
    this.yearValue = msg
  }

  getTaxValue(msg:any){
    console.log(msg);
    this.taxValue = msg
  }

  @Output() submitData = new EventEmitter();

  onSubmit(event:any){
    console.log("submit value : ", event)
    this.submitData.emit(event);

  }

}
