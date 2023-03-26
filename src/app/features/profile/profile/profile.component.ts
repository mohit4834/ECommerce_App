import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  public userProfile: any;

  constructor(private auth: AuthService) {
    this.auth.user$.subscribe(userProfile => {
      console.log('User Profile data got is : ', userProfile);
      this.userProfile = userProfile;
    })
  }

}
