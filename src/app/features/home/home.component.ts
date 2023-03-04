import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs/internal/Observable';
import { productModel } from 'src/app/core/models/product.model';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productsList : productModel[] = [];
  isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$;
  constructor(private authService: AuthService, private messageService: MessageService) {
    this.isAuthenticated$.subscribe(val => {console.log("isAuthenticated$ value is",val)})
  }
  ngOnInit(): void {
    this.messageService.getAllProducts().subscribe((result:any) => {
      console.log('product list fetched is : ', result);
      this.productsList = result.products;
    })
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
