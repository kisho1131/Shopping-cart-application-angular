import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: 'view-products', component: ProductComponent },
  { path: 'add-products', component: CreateProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  { path: 'login', component:LoginComponent, pathMatch: 'full'},
  { path: '', redirectTo: 'view-products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
