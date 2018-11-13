import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
private myEvents=[];
private idCreator= localStorage.getItem('id');
private notEvent:boolean;
  constructor(private data: DataService) { 
    

    this.data.getEventById(this.idCreator).subscribe(
      (payload) => {
        if (payload['success']) {
          this.myEvents=payload['data']
        } else {
          console.log(payload['error'])
        }
      }
    )
  }
  createEvent(form:NgForm){
    this.data.createEvent(form.value.name, form.value.city, form.value.date, form.value.activity, form.value.description, this.idCreator);
    
  }
  ngOnInit() {
    if(this.myEvents = null){
      this.notEvent=true;
    }
  }

}


