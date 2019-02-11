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
private eventsSubscribed=[];
private id= localStorage.getItem('id');
private notEvent:boolean;
  constructor(private data: DataService) {
  }
  createEvent(form:NgForm){
    this.data.createEvent(form.value.name, form.value.city, form.value.date, form.value.activity, form.value.description, this.id);
    
  }
  ngOnInit() {
    this.data.getEventById(this.id).subscribe(
      (payload) => {
        if (payload['success']) {
          this.myEvents=payload['data']
          if(this.myEvents = null){
            this.notEvent=true;
          }
        } else {
          console.log(payload['error'])
        }
      }
    )
    this.data.getEventsSubscribedById(this.id).subscribe(
      (payload) => {
        if (payload['success']) {
          this.eventsSubscribed = payload['data']
          for(let i = 0; i<this.eventsSubscribed.length; i++){
            let author = ""
            this.data.getEventAuthor(this.eventsSubscribed[i]['idCreator']).subscribe(
              (payload2) => {
                if (payload2['success']){
                  author = payload2['data'][0]['firstname'] + ' ' + payload2['data'][0]['lastname']
                  this.eventsSubscribed[i]['author'] = author
                } else {
                  console.log(payload2['error'])
                }
              }
            )
          }
        } else {
          console.log(payload['error'])
        }
      }
    )
  }

}


