import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html'
})
export class CallbackComponent {

  isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$;
  constructor (private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {
    console.log('Activated Route snapshot value is: ',this.activatedRoute.snapshot.queryParams);
    window.localStorage.setItem('code', this.activatedRoute.snapshot.queryParams['code']);
    window.localStorage.setItem('state', this.activatedRoute.snapshot.queryParams['state']);
    console.log('Code and State saved in local storage and route to home.');
    this.router.navigate(['/home']);
    this.isAuthenticated$.subscribe(val => {console.log("isAuthenticated$ value is",val)})
  }

  navigateToPage(page: string): void {
    this.router.navigate([page]);
  }

}
