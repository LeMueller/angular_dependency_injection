import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(public logger: LoggerService) { }

  getStock() : Stock {
    this.logger.log("getStock fucntion is called.");
    return new Stock(1, "IBM");
  }

}

export class Stock {
  constructor(
    public id: number,
    public name: string
  ) {

  }
}
