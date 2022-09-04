import { NgForOf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OneService } from 'src/app/services/one/one.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  Months = [
    {id: "01", name: "January"},
    {id: "02", name: "Febuary"},
    {id: "03", name: "March"},
    {id: "04", name: "April"},
    {id: "05", name: "May"},
    {id: "06", name: "June"},
    {id: "07", name: "July"},
    {id: "08", name: "August"},
    {id: "09", name: "September"},
    {id: "10", name: "October"},
    {id: "11", name: "November"},
    {id: "12", name: "December"}
  ];

  selectedMonthValue = "";

  constructor(public one: OneService) { }

  ngOnInit(): void {
  }
  

  @Output() monthValueEmitter = new EventEmitter();

  monthvalue(e:any){
    console.log(e.target.value);
    this.monthValueEmitter.emit(e.target.name);  
  }

  sendMonth(selectedMonthValue:string){
    this.one.month = selectedMonthValue;
    console.log("Select month : " , this.one.month)
  }


}
