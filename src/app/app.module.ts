import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovaTranferenciaComponents } from './components/nova-tranferencia/nova-tranferencia.components';

@NgModule({
  declarations: [
    AppComponent,
    NovaTranferenciaComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
