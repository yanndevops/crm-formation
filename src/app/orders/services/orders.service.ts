import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order';
import { environment } from 'src/environments/environment';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
     // map(tab =>tab.map(obj=>new Order(obj)));
      map((tab) =>{
        return tab.map((obj)=>{
          return new Order(obj);
        });
      })
    );
  }

  // get collection
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }

   // change item state in collection
   public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order({...item});
    obj.state = state;
    return this.updateItem(obj);
  }

  // update item in collection
  public updateItem(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`, item);
    console.log('toto')
  }
  // change item state in collection

  // update item in collection

  // add item in collection

  // delete item in collection

  // get item by id from collecion
  // add item in collection
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}orders`, item);
  }
}
