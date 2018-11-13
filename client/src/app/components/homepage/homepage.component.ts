import { Component, OnInit, Output } from '@angular/core';
import {NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private route: Router, private auth: AuthService, private data: DataService) { 
    auth.errorLogin.subscribe(
      (errore) => {
        alert('email o password errati')

      });
  }

  ngOnInit() {
  }

  logIn(form: NgForm){
    this.auth.login(form.value.email, form.value.password);
    
  
  }
  
  goSignin(){
    this.route.navigate(['signin']);
  }

}
//