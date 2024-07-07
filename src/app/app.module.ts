import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { ContentComponent } from './content/content.component';
import { NewContentComponent } from './new-content/new-content.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReviewListComponent } from './review-list/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WhatsappComponent,
    ContentComponent,
    NewContentComponent,
    ProductsComponent,
    FooterComponent,
    ReviewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
