import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private APIURL = 'http://localhost:8080/'+'api/data';
  private headers;
  private idUser = localStorage.getItem('id');
  
  constructor(private router: Router, private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set("token", localStorage.getItem('token'))
      .set("id", localStorage.getItem('id'));
  }

  getEvents(){
    return this.http.get(this.APIURL+'/event')
  }
 
  openEvent(id) {
    return this.http.post(this.APIURL + '/event', { id: id }, { headers: this.headers })
  }


  getEventById(id){
    return this.http.put(this.APIURL+'/event', { id: id }, { headers: this.headers })
  }

  createEvent(name:string, city:string, date:string, activity:string, description:string, idCreator:any){
    this.http.post(this.APIURL+'/event', {name:name, city:city, date:date, activity:activity, description:description, idCreator: idCreator})
    .subscribe((payload:any)=>{
      if(payload.success){
        console.log('evento creato')
      }
      else{
        console.log(payload.error)
      }
    })
  }

  getUserById(id){
    return this.http.put(this.APIURL+'/userprofile', { id: id }, { headers: this.headers })
  }

  setProfile(id, height, weight){
    return this.http.post(this.APIURL+'/userprofile', {id: id, height: height, weight: weight}, { headers: this.headers })
  }

}