import { Component, OnInit,  TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OneService } from 'src/app/services/one/one.service';

@Component({
  selector: 'app-review-confirm',
  templateUrl: './review-confirm.component.html',
  styleUrls: ['./review-confirm.component.scss']
})
export class ReviewConfirmComponent implements OnInit {
 
  modalRef?: BsModalRef;

  config ={
    animated: true
  }

  constructor(public one: OneService , private modalService: BsModalService) { }

  ngOnInit(): void {
  }

 
  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template, this.config);
  }



}
