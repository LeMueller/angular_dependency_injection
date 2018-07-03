import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockService } from './shared/stock.service';
import { Stock2Component } from './stock2/stock2.component';
import { LoggerService } from './shared/logger.service';

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
  providers: [StockService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
