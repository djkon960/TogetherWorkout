import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent} from './components/app/app.component'
import { SigninComponent } from './components/signin/signin.component';
import { EventComponent } from './components/event/event.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BachecaAnnunciComponent } from './components/bacheca-annunci/bacheca-annunci.component';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/services/auth.service';
import { AuthguardService } from 'src/app/services/authguard.service';
import { RoutingModule } from 'src/app/modules/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { SupportoComponent } from './components/supporto/supporto.component';
import { ClassificheComponent } from './components/classifiche/classifiche.component';


@NgModule({
  declarations: [
   AppComponent,
   HomepageComponent,
   NavbarComponent,
   SigninComponent,
   EventComponent,
   SidenavComponent,
   BachecaAnnunciComponent,
   MainComponent,
   UserprofileComponent,
   SupportoComponent,
   ClassificheComponent

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    AuthService,
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
