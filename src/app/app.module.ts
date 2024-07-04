import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ShortenLinkFormComponent } from './shorten-link-form/shorten-link-form.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FooterComponent } from './footer/footer.component';
import { LinkComponent } from './link/link.component';
import { ShortenService } from './shorten.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ShortenLinkFormComponent,
    StatisticsComponent,
    FooterComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ShortenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
