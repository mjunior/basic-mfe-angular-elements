import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const footerApp = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('footer-app', footerApp);
  }

}
