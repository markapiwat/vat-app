import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OneService } from 'src/app/services/one/one.service';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.scss']
})
export class SaleAmountComponent implements OnInit {

  saleValueResult?: number;

  @Output() 
  salevalueEmitter = new EventEmitter();


  constructor(public one: OneService) { }

  ngOnInit(): void {
  }

  saleValue(e:any){
    console.log(e.target.value);
    this.salevalueEmitter.emit(e.target.value);
  }

  saleValueConfirm(event: any){
    this.one.money = event.target.value
    console.log(event)
  }

}
