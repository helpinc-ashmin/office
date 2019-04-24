import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface PeriodicElement {
  company: string;
  title: string;
  type: string;
  deadline: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: 'designer',
    company: 'abcd',
    type: 'adad',
    deadline: '33days',
    description: `Very enthusiastic with minimum of 3 years experience in javascript with good knowledge in DOM manipulation. `
  }, {
    title: 'writer',
    company: 'efgh',
    type: 'adad',
    deadline: '32days',
    description: `Very enthusiastic with minimum of 3 years experience in javascript with good knowledge in DOM manipulation.`
  },
];
@Component({
  selector: 'app-expand-jobs',
  templateUrl: './expand-jobs.component.html',
  styleUrls: ['./expand-jobs.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExpandJobsComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['title', 'company', 'type', 'deadline'];
  expandedElement: PeriodicElement | null;
  constructor() { }

  ngOnInit() {
  }

}
