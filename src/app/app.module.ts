import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { DrugCarouselComponent } from './pages/drug-carousel/drug-carousel.component';
import { FeaturesBenefitsComponent } from './pages/features-benefits/features-benefits.component';
import { HomeFooterComponent } from './pages/home-footer/home-footer.component';
import { ServicesComponent } from './pages/services/services.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DrugCarouselComponent,
    FeaturesBenefitsComponent,
    HomeFooterComponent,
    ServicesComponent,
    SignupPageComponent,
    ContactUsComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
