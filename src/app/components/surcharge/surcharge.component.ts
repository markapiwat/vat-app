import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OneService } from 'src/app/services/one/one.service';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.scss']
})
export class SurchargeComponent implements OnInit {

  @Input() 
  taxValueResult?:number;

  constructor(public one: OneService) { }

  ngOnInit(): void {
  }

  setSurcharge(taxValueResult:any){
    this.one.surchange = taxValueResult;
  }

  @Output() surChargeEmitter = new EventEmitter();

  surChargeValue(e: any){
    console.log(e.target.value)
    this.surChargeEmitter.emit(e.target.value)
  }



}
