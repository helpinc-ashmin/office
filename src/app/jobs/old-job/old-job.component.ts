import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-old-job',
  templateUrl: './old-job.component.html',
  styleUrls: ['./old-job.component.css']
})
export class OldJobComponent implements OnInit {
  data: any;
  deleteRow(id){
    for(let i = 0; i < this.data.length; ++i){
        if (this.data[i].id === id) {
            this.data.splice(i,1);
        }
    }
}
  constructor() { }

  ngOnInit() {
  }

}
