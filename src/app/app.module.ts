import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockService } from './shared/stock.service';
import { Stock2Component } from './stock2/stock2.component';
import { LoggerService } from './shared/logger.service';
import { AnotherStockService } from './shared/another-stock.service';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    Stock2Component
  ],
  imports: [
    BrowserModule
  ],
  // 在没有加入StockService时，并没有报错。因为是Angular6，不是Angular4?
  providers: [
    // 工厂方法只是在第一次被调用的时候，实例化一次，之后都用这个一个实例
    {provide: StockService, useFactory: (logger: LoggerService, isDev) => {
      console.log('isDev: ', isDev);
      
      // let logger = new LoggerService();
      // let dev = Math.random() > 0.5;
      if(isDev) {
        return new StockService(logger);
      }
      else {
        return new AnotherStockService(logger);
      }
      // deps: 工厂模式匿名函数的参数用到的provider
    }, deps: [LoggerService, "IS_DEV_ENV"]},
    LoggerService,
    {provide: "IS_DEV_ENV",  useValue: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
