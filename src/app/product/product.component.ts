import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService, private router: Router) {
    this.products = [];
  }
  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getProductList().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  updateProduct(id: number) {
    this.router.navigate(['update-product', id]);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe((data) => {
      this.getProducts();
      console.log(data);
    });
  }
}
