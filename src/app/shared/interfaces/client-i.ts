import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  name: string;
  comment: string;
  ca: number;
  cattc: number;
  state: StateClient;
  id: number;

  totalTtc(): number;
}
