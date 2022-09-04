import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OneService } from 'src/app/services/one/one.service';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.scss']
})
export class TaxAmountComponent implements OnInit {

  @Input()
  saleValueResult? : number;


  @Output() 
  taxValueEmitter = new EventEmitter();
  
  constructor(public one: OneService) { }

  ngOnInit(): void {
  }

  taxValue(e: any){
    console.log(e.target.value)
    this.taxValueEmitter.emit(e.target.value)
  }

  setTaxConfirm(saleValueResult: any){
    console.log(saleValueResult)
    this.one.tax = saleValueResult

  }

}
