import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
///
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private route: Router, private auth:AuthService) { }
  
  signIn(form: NgForm){
    if(!form.valid){
      return false;
    }
    this.route.navigate(['main']);
    this.auth.signIn(form.value.firstname, form.value.lastname, form.value.date, form.value.email, form.value.password, form.value.city);
}
  ngOnInit() {
  }

}
