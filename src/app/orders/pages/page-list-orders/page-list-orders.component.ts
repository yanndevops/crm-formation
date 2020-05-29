import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Btn } from 'src/app/shared/interfaces/btn';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public collection$: Observable<Order[]>;
  public headers: string[];
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public title: string;
  public subtitle: string;
  public states = Object.values(StateOrder);
  constructor(
    private os: OrdersService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.btnRoute = {
      label: 'Add an order',
      route: 'add'
    };
    this.btnHref = {
      label: 'Go to Google',
      href: 'http://www.google.fr'
    };
    this.btnAction = {
      label: 'Open dialogue',
      action: true
    };
    this.collection$ = this.os.collection;
    this.headers = [
      'Type',
      'Client',
      'Nb. Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  public changeState(item: Order, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      // traiter la res de l'api, codes erreur etc...
      item.state = res.state;
    });
  }

  public openPopUp() {
    console.log('open popup');
  }

}















