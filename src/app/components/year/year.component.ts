import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {

  Years = [
    {id: "1", name: "2022"},
    {id: "2", name: "2021"},
    {id: "3", name: "2020"}
  ];
  selectedYearValue = null;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() yearValueEmitter = new EventEmitter();

  yearvalue(e:any){
    console.log(e.target.value);
    this.yearValueEmitter.emit(e.target.value);
  }

}
