import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/clients.service';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {
  public collection$: Observable<Client[]>;
  public headers: string[];

  public states = Object.values(StateClient);

  constructor(private os: ClientService) { }



ngOnInit(): void {
  this.collection$=this.os.collection;


  this.headers = [
    'Name',
    'Comment',
    'Ca',
    'CA TTC',
    'State'
  ];
}

public changeState(item: Client, event) {
  this.os.changeState(item, event.target.value).subscribe((res) => {
    // traiter la res de l'api, codes erreur etc...
    item.state = res.state;
  });
}

}
