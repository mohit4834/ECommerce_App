import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$;
  constructor(private authService: AuthService) {
    this.isAuthenticated$.subscribe(val => {console.log("isAuthenticated$ value is",val)})
  }

  handleSignUp(): void {
    this.authService.loginWithRedirect({
      appState: {
        target: '/profile',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  }

}
