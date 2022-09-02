import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.scss']
})
export class SaleAmountComponent implements OnInit {

  saleValueResult?: number;

  @Output() 
  salevalueEmitter = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  saleValue(e:any){
    console.log(e.target.value);
    this.salevalueEmitter.emit(e.target.value);
  }

}
