import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtUrlResolverService } from './ext-url-resolver.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '""| home',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'facebook-login',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/facebook-login/facebook-login.module').then((m) => m.FacebookLoginModule),
  },
  {
    path: 'redirect',
    loadChildren: () =>
      import('./features/callback/callback.module').then(
        (m) => m.CallbackModule
      ),
  },
  {
    path: 'compare',
    loadChildren: () =>
      import('./features/compare/compare.module').then(
        (m) => m.CompareModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./features/fallback/fallback.module').then(
        (m) => m.FallbackModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
