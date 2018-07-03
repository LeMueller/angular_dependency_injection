import { Component, OnInit, Injector } from '@angular/core';
import { StockService, Stock } from '../shared/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private stock: Stock;

  // 手动进行注入器注入。只是解释，项目中不要真这么写！！！
  public stockService: StockService;

  // 构造函数的参数是注入器需要注入的服务，如果没有，就不需要任何注入
  constructor(
    // public stockService: StockService

    // 手动进行注入器注入。只是解释，项目中不要真这么写！！！
    public injector: Injector
  ) {
    // 手动进行注入器注入。只是解释，项目中不要真这么写！！！
    this.stockService = injector.get(StockService);
  }

  ngOnInit() {
    this.stock = this.stockService.getStock();
  }

}
