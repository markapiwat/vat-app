import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OneService } from 'src/app/services/one/one.service';


@Component({
  selector: 'app-filling-type',
  templateUrl: './filling-type.component.html',
  styleUrls: ['./filling-type.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ])
    ])
  ],
  
})
export class FillingTypeComponent implements OnInit {
  

  @Output() selectRadioEmitter = new EventEmitter()

  constructor( public one: OneService) { }

  ngOnInit() {   
  }


  onSelectRadio(e: any){
    this.selectRadioEmitter.emit(e.target.value);
  }

  setFilingType(string: string){
    this.one.typeFilling = string
  }

}
