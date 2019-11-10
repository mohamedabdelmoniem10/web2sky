import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './header/carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { WorkComponent } from './work/work.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './header/chat/chat.component';
import { FormComponent } from './form/form.component';
import { ReviewPopComponent } from './reviews/review-pop/review-pop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CarouselComponent,
    ServicesComponent,
    WorkComponent,
    FooterComponent,
    ReviewsComponent,
    AboutComponent,
    ChatComponent,
    FormComponent,
    ReviewPopComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    NgbModule
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
