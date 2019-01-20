import * as fs from 'fs';

export class OrdersService {
   public getAllOrders(url: string) {
      return JSON.parse(fs.readFileSync(url, 'utf8'));
   }
}
