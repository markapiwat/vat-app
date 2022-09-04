import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OneService } from 'src/app/services/one/one.service';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.scss']
})
export class TotalAmountComponent implements OnInit {

 

  constructor(public one: OneService) { }

  ngOnInit(): void {
  }



}
