import { Component, OnInit, EventEmitter, Output } from '@angular/core';


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
  constructor() { }

  ngOnInit() {
  }
onClicking(){
  this.jobView.emit();
}
}
