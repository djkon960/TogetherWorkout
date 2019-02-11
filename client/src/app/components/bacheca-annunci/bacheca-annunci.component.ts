import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bacheca-annunci',
  templateUrl: './bacheca-annunci.component.html',
  styleUrls: ['./bacheca-annunci.component.css']
})
export class BachecaAnnunciComponent implements OnInit {

  private events=[];
  private filteredEvents=[];
  private clicked:boolean=false;

  constructor(private data: DataService) { 
  }
  ngOnInit() {
    this.data.getEvents().subscribe(
      (payload) => {
        if (payload['success']) {
          this.events=payload['data']
          for(let i = 0; i<this.events.length; i++){
            let author = ""
            this.data.getEventAuthor(this.events[i]['idCreator']).subscribe(
              (payload2) => {
                if (payload2['success']){
                  author = payload2['data'][0]['firstname'] + ' ' + payload2['data'][0]['lastname']
                  this.events[i]['author'] = author
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

  filterEventsByCity(){
    this.clicked=true;
    this.filteredEvents = this.events.filter(
      (value) => {
        if(value.city == localStorage.getItem('city')){
          return value;
        }
      }
    )
  }
  
  subscribeEvent(){
    //TODO Sottoscriversi ad un evento
  }

}
