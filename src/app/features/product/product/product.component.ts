import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private messageService: MessageService) {
    this.route.queryParams.subscribe((params: any) => {
      console.log('params received is : ', params);
      this.messageService.getSearchProducts(params.title).subscribe((result:any) => {
        console.log('product list fetched for clicked product is : ', result);
        if (result) {
          this.productsList = result.products;
          this.currentProduct = this.productsList[0];
        } else {
          console.warn('No result found for the ',params, 'criteria');
        }
      })
    })
  }

}
