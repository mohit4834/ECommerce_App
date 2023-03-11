import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        AuthModule.forRoot({
          domain: 'dev-n7du436oqraq4e7k.us.auth0.com',
          clientId: 'BISIeqnm9LaUWvzwMBSyF5wlUGFcY3oO',
          authorizationParams: {
            redirect_uri: window.location.origin
          }
        }),
        HttpClientModule,
        HttpClientXsrfModule,
        SharedModule
    ]
})
export class AppModule { }
