import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { WinnersComponent } from './winners/winners.component';
import { MorewinnersComponent } from './morewinners/morewinners.component';

@NgModule({
  declarations: [
    AppComponent,
    WinnersComponent,
    MorewinnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
