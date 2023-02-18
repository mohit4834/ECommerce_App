import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html'
})
export class CallbackComponent {

  constructor (private activatedRoute: ActivatedRoute, private router: Router) {
    console.log('Activated Route snapshot value is: ',this.activatedRoute.snapshot.queryParams);
    window.localStorage.setItem('code', this.activatedRoute.snapshot.queryParams['code']);
    window.localStorage.setItem('state', this.activatedRoute.snapshot.queryParams['state']);
    console.log('Code and State saved in local storage and route to home.');
    this.router.navigate(['/home']);
  }

}
