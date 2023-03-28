import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { MessageService } from 'src/app/core';
import { productModel } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  public productsList: productModel[] = [];
  public currentProduct: any;

  constructor(private route: ActivatedRoute, private messageService: MessageService, private router : Router, private authService: AuthService) {
    this.route.queryParams.subscribe((params: any) => {
      console.log('params received is : ', params);
      if (params && params.title) {
        this.messageService.getSearchProducts(params.title).subscribe((result:any) => {
          console.log('product list fetched for clicked product is : ', result);
          if (result) {
            this.productsList = result.products;
            this.currentProduct = this.productsList[0];
          } else {
            console.warn('No result found for the ',params, 'criteria');
          }
        })
      }
    })
  }

  handleSignUp(): void {
    this.authService.loginWithRedirect({
      appState: {
        target: '/home',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  }

  navigateToPage(page: string): void {
    this.router.navigate([page]);
  }

}
