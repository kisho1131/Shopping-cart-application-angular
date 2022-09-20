import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private base_url = 'http://localhost:8080/api/v1';
  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.base_url}/all/products`);
  }

  saveProduct(product: Product): Observable<Object> {
    return this.httpClient.post(`${this.base_url}/add/product`, product);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.base_url}/get/product/${id}`);
  }

  updateProductById(id: number, product: Product): Observable<Object> {
    return this.httpClient.put(
      `${this.base_url}/update/product/${id}`,
      product
    );
  }

  deleteProduct(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.base_url}/delete/product/${id}`);
  }
}
