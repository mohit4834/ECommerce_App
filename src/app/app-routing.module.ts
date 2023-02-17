import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtUrlResolverService } from './ext-url-resolver.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'redirect',
    loadChildren: () =>
      import('./features/callback/callback.module').then(
        (m) => m.CallbackModule
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
