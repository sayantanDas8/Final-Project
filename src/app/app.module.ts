import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CatagoryComponent } from './Components/catagory/catagory.component';
import { ServiceCentersComponent } from './Components/service-centers/service-centers.component';
import { BrunchesComponent } from './Components/brunches/brunches.component';
import { ProductsComponent } from './Components/products/products.component';
import { DetailsComponent } from './Components/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FeaturedComponent } from './Components/featured/featured.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './Components/about/about.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ReviewComponent } from './Components/review/review.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './Service/http-interceptor.service';
import { StorageService } from './Service/storage.service';
import { BookingsComponent } from './Components/bookings/bookings.component';
import { MyBookingsComponent } from './Components/my-bookings/my-bookings.component';
import { ArchiveBadgePipe } from './Pipe/archive-badge.pipe';
import { TermsConditionsComponent } from './Components/terms-conditions/terms-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatagoryComponent,
    ServiceCentersComponent,
    BrunchesComponent,
    ProductsComponent,
    DetailsComponent,
    FeaturedComponent,
    AboutComponent,
    ContactsComponent,
    LoginComponent,
    RegistrationComponent,
    ReviewComponent,
    ProfileComponent,
    BookingsComponent,
    MyBookingsComponent,
    ArchiveBadgePipe,
    TermsConditionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
