import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

export interface Salary {
  name: string;
  
}
export interface Job {
  name: string;
  
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
 
})
export class RegisterComponent implements OnInit {
  salaryControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  salaries: Salary[] = [
    {name: '10k'},
    {name: '20k'},
    {name: '50k'},
    {name: 'negotiable'},
  ];

  jobControl = new FormControl('', [Validators.required]);
  jobFormControl = new FormControl('', Validators.required);
  jobs: Job[] = [
    {name: 'Engineering'},
    {name: 'IT'},
    {name: 'Marketing'},
    {name: 'Sales'},
  ];

editorForm: FormGroup;
editorStyle ={
  height: '200px'
}
  constructor() { }

  ngOnInit() {
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
    })
  }

}
