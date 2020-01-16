import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ UiSwitchModule}from 'ngx-toggle-switch';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaserviceService } from './pizzaservice.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiSwitchModule
  ],
  providers: [PizzaserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
