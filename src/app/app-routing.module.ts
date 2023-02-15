import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExtUrlResolverService } from './ext-url-resolver.service';
import { FallBackComponent } from './fall-back/fall-back.component';
import { GitAuthComponent } from './git-auth/git-auth.component';
import { LoginComponent } from './login/login.component';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:'login'
    },
    {
    path:'dashboard',
    component:DashboardComponent
    },
    {
    path:'login',
    component:LoginComponent
    },
    {
    path:'redirect',
    component:RedirectComponent
    },
    {
    path: 'test',
    component: GitAuthComponent,
    resolve: {
    url: ExtUrlResolverService
    }
    },
    {
    path:'**',
    component:FallBackComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
