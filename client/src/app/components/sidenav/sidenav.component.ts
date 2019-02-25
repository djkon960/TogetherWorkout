import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  private nomeUser = localStorage.getItem('nome') ;
  private isLogged:boolean =false;

  constructor(private route:Router, private auth: AuthService) {
 

   }
   goProfile(){
     this.route.navigate(['userprofile']);
   }
   goBacheca(){
     this.route.navigate(['bacheca-annunci']);
   }
   goSupporto(){
     this.route.navigate(['supporto']);
   }
   goClassifiche(){
    this.route.navigate(['classifiche']);
  }
   goHome(){
     this.route.navigate(['homepage']);
   }
   logout(){
     this.auth.logout();
     this.route.navigate(['homepage']);
      }
      

  ngOnInit() {
    if(localStorage.getItem('id')){
      this.isLogged=true;
    }
  }

}
