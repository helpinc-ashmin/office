import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal/form-modal.component';

export interface PeriodicElement {
company: string;
  title: string;
  type: string;
  deadline: string;
  buttons:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'Engineer', company: 'ABCD', type: 'full-time', deadline: '22 days', buttons:'Apply'},
  {title: 'Writer', company: 'EFGH', type: 'part-time', deadline: '30 days', buttons:'Apply'},
  
];
@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.css']
})

export class NewJobComponent implements OnInit {
  displayedColumns: string[] = ['title', 'company', 'type', 'deadline', 'buttons'];
  dataSource = ELEMENT_DATA;
  @Output() jobView = new EventEmitter <void>();
  constructor(private modalService: NgbModal) { }
  openFormModal() {
    const modalRef = this.modalService.open(FormModalComponent);


   
    modalRef.componentInstance.id = 10;

    
    modalRef.result.then((result) => {
      console.log('form result >>');
      console.log(result);
    }).catch((error) => {
      console.log('from error >>');
      console.log(error);
    });
  }
  ngOnInit() {
  }
onClicking(){
  this.jobView.emit();
}
}
