import { Component, OnInit } from '@angular/core';
import { OneService } from 'src/app/services/one/one.service';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.scss']
})
export class PenaltyComponent implements OnInit {

  constructor(public one: OneService) { }

  ngOnInit(): void {
  }

  sendpenalty(event:any){
    this.one.penalty = event
  }

}
