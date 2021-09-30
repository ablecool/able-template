import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbleIndexComponent } from './able-index/able-index.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
// import { IconsComponent } from './icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    AbleIndexComponent,
    NavComponent,
    FooterComponent,
    // IconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
