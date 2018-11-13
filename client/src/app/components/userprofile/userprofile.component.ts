import { Component, OnInit,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
private idUser = localStorage.getItem('id');
private nomeUser;
private cognomeUser;
private dateUser;
@Input() height;
@Input() weight;
private setnow:boolean=true;
private set:boolean;
private city = localStorage.getItem('city');

  constructor(private data: DataService) {
    this.data.getUserById(this.idUser).subscribe(
      (payload:any)=>{
        if(payload.success){
          this.nomeUser = payload['data']['0']['firstname'];
          this.cognomeUser = payload['data']['0']['lastname'];
          this.dateUser = payload['data']['0']['date'];
          this.height=payload['data']['0']['height'];
          this.weight=payload['data']['0']['weight'];
        }
        else{
          console.log(payload.error)
        }

      }
    )
   }

  ngOnInit() {
  }

setting(){
  this.data.setProfile(this.idUser, this.height, this.weight).subscribe(
    (payload) => {
      if(payload['success']){
        alert("Utente aggiornato con successo");
      } else {
        alert("Errore imprevisto. Per favore riprova");
      }
    }
  );
}
}
