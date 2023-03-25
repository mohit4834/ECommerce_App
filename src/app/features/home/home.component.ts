import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  searchForm: FormGroup;

  constructor(private authService: AuthService, private messageService: MessageService, private fb: FormBuilder, private router: Router ) {
    this.isAuthenticated$.subscribe(val => {console.log("isAuthenticated$ value is",val)});
    this.searchForm = this.fb.group({
      searchValue: ['', Validators.required],
    });
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

  handleSearch():void {
    this.messageService.getSearchProducts(this.searchForm.controls['searchValue'].value).subscribe((result:any) => {
      console.log('product list fetched is : ', result);
      if (result) {
        this.productsList = result.products;
      } else {
        console.warn('No result found for the ',this.searchForm.controls['searchValue'].value, 'criteria');
      }
    })
  }

  navigateToProductDetailPage(currentProduct: productModel): void {
    this.router.navigate(['product-detail'], {queryParams: {title: currentProduct.title}});
  }

}
