import { OrderI } from '../interfaces/order-i';
import { ClientI } from '../interfaces/client-i';
import { StateClient } from '../enums/state-client.enum';
import { NumberSymbol } from '@angular/common';

export class Client implements ClientI {
   name: string;
   comment: string ;
   ca: number;
   cattc: number;
   state = StateClient.ACTIF;
   id:number;




  constructor (obj?: Partial<Client>){
    if (obj){
      Object.assign(this,obj);
    }
  }

  totalTtc(): number {
    console.log('TOTAL TTC')
    return this.ca * (1+ 0.2);
  }

}
