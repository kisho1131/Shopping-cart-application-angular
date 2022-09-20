import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  products: Product = new Product();
  constructor(private productServive: ProductService, private router: Router) {}

  goToProductList() {
    this.router.navigate(['/view-products']);
  }

  saveProduct() {
    this.productServive.saveProduct(this.products).subscribe((data) => {
      this.goToProductList();
      console.log(data);
      error: console.error;
    });
  }
  onSubmit() {
    console.log(this.products);
    this.saveProduct();
  }
  ngOnInit(): void {}
}
