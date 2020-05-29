import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { FormAddOrderComponent } from './components/form-add-order/form-add-order.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [PageListOrdersComponent, PageAddOrderComponent, FormAddOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
