import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NewContentComponent } from './new-content/new-content.component';

const routes: Routes = [
  {
    path: 'Products',
    component: ProductsComponent,
  },
  {
    path: '',
    component: NewContentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
