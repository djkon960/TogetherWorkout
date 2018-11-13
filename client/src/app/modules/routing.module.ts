import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthguardService} from '../services/authguard.service';
import {HomepageComponent} from '../components/homepage/homepage.component';
import { EventComponent } from 'src/app/components/event/event.component';
import { BachecaAnnunciComponent } from 'src/app/components/bacheca-annunci/bacheca-annunci.component';
import { SigninComponent } from 'src/app/components/signin/signin.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { UserprofileComponent } from 'src/app/components/userprofile/userprofile.component';
import { SupportoComponent } from '../components/supporto/supporto.component';
import { ClassificheComponent } from '../components/classifiche/classifiche.component';

const routes:Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path:'signin',
    component: SigninComponent
  },
  {
    path:'homepage',
    component: HomepageComponent,
    canActivate:[AuthguardService]
  },
  {
    path:'supporto',
    component: SupportoComponent,
    canActivate:[AuthguardService]
  },
  {
    path:'event',
    component: EventComponent,
    canActivate: [AuthguardService]
  },
  {
    path:'main',
    component: MainComponent,
    canActivate: [AuthguardService]
  },
  {
    path:'bacheca-annunci',
    component: BachecaAnnunciComponent,
    canActivate: [AuthguardService]
  },
  {
    path:'userprofile',
    component: UserprofileComponent,
    canActivate: [AuthguardService]
  },
  {
    path:'classifiche',
    component: ClassificheComponent,
    canActivate: [AuthguardService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],

  providers:[AuthguardService],

  declarations: []
})

export class RoutingModule { }
