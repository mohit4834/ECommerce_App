import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookLoginComponent } from './facebook-login.component';

const routes: Routes = [
  {
    path: "",
    component: FacebookLoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacebookLoginRoutingModule { }
