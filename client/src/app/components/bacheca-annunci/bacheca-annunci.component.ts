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
    
    this.data.getEvents().subscribe(
      (payload) => {
        if (payload['success']) {
          this.events=payload['data']
        } else {
          console.log(payload['error'])
        }
      }
    )
  }
  ngOnInit() {
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

}
