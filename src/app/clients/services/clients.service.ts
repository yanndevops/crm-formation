import { Injectable } from '@angular/core';




import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environment';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
     // map(tab =>tab.map(obj=>new Order(obj)));
     tap(tab => console.log(tab)),
      map((tab) =>{
        return tab.map((obj)=>{
          return new Client(obj);
        });
      })
    );
  }

  // get collection
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }

   // change item state in collection
   public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = new Client({...item});
    obj.state = state;
    return this.updateItem(obj);
  }

  // update item in collection
  public updateItem(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item);
    console.log('toto')
  }
  // change item state in collection

  // update item in collection

  // add item in collection

  // delete item in collection

  // get item by id from collecion
}
