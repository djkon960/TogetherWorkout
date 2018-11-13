import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @Output() outLogin = new EventEmitter()
@Output() outSignin = new EventEmitter()
@Output() outLogout = new EventEmitter()
@Output() errorLogin = new EventEmitter()
@Output() errorSignin = new EventEmitter()

  private APIURL = 'http://localhost:8080/'+'api/auth';

  constructor(private http: HttpClient, private route: Router) { }
  
  isLoggedIn(){
    return !!localStorage.getItem('token');
  }


  signIn(firstname:string, lastname:string,userDate:string, email:string, password:string, city:string){
  
    this.http.post(this.APIURL+'/signin', 
    {firstname: firstname, lastname: lastname, date: userDate, email: email, password: password, city: city}
  ).subscribe(
      (payload:any) => {
        console.log(payload.error)
        if(payload.success){
        this.outSignin.emit();
      }
        else{
          this.errorSignin.emit(payload.error);

        }
      },
      (error:any) => {
        this.errorSignin.emit(error)
      }
    )
  }

   logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    localStorage.removeItem('id');
    window.location.reload(true);
    this.outLogout.emit();
  }

  login(email:string, password:String){
    this.http.post(this.APIURL+'/login', {email: email, password: password}).subscribe(
      (payload: any) => {
        if(payload.success){
          let userData = payload.data[0]
          localStorage.setItem('token', payload.token);
          localStorage.setItem('id',userData.id);
          localStorage.setItem('nome',userData.firstname);
          localStorage.setItem('city', userData.city);
          this.outLogin.emit();
          window.location.reload(true);
          this.route.navigate(['main']);
        } else {
          this.errorLogin.emit(payload.error);
        }
      },
      (error) => {
        this.errorLogin.emit(error);
      }
    )
    
    
  }
}
