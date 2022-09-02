import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typefill',
  templateUrl: './typefill.component.html',
  styleUrls: ['./typefill.component.scss']
})
export class TypefillComponent implements OnInit {

  Types = [
    {id: "0", name: "Select Types"},
    {id: "1", name: "On-Time"},
    {id: "2", name: "Late"} 
  ];
  selectedTypeValue = null;

  constructor() { }

  ngOnInit(): void {
  }

}
