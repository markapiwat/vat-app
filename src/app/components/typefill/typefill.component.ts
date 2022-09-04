import { Component, OnInit } from '@angular/core';
import { OneService } from 'src/app/services/one/one.service';

@Component({
  selector: 'app-typefill',
  templateUrl: './typefill.component.html',
  styleUrls: ['./typefill.component.scss']
})
export class TypefillComponent implements OnInit {

  Types = [
    {id: "1", name: "On-Time"},
    {id: "2", name: "Late"} 
  ];
  selectedTypeValue = null;

  constructor(public one: OneService) { }

  ngOnInit(): void {
  }

}
