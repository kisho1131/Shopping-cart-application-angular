import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Product } from '../product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  products: Product = new Product();
  id!: number;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  goToProductList() {
    this.router.navigate(['/view-products']);
  }
  onSubmit() {
    this.productService
      .updateProductById(this.id, this.products)
      .subscribe((data) => {
        this.goToProductList();
        Swal.fire('Product Updated Successfully !', '', 'info');
        error: console.error;
      });
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe((data) => {
      this.products = data;
      error: console.error;
    });
  }
}
