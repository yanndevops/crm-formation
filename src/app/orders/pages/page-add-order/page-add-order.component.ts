import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public title: string;
  public subtitle: string;
  constructor(
    private os: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((datas) => {
      this.title = datas.title;
      this.subtitle = datas.subtitle;
      // console.log(datas);
    });
  }

  public add(item: Order) {
    this.os.add(item).subscribe((res) => {
      // console.log(res);
      // redirection vers la route orders
      // this.router.navigate(['orders']);
      // redirection relative par rapport à la route sur laquelle je suis
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

}







































