import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CatagoryComponent } from './Components/catagory/catagory.component';
import { ServiceCentersComponent } from './Components/service-centers/service-centers.component';
import { ProductsComponent } from './Components/products/products.component';
import { BrunchesComponent } from './Components/brunches/brunches.component';
import { DetailsComponent } from './Components/details/details.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { ReviewComponent } from './Components/review/review.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { MyBookingsComponent } from './Components/my-bookings/my-bookings.component';
import { AuthGuardGuard } from './Guard/auth-guard.guard';
import { TermsConditionsComponent } from './Components/terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'catagory', component:CatagoryComponent},
  { path: 'service', component:ServiceCentersComponent},
  { path: 'catagory/products/:item_id', component:ProductsComponent},
  { path: 'catagory/products/:item_id/details/:vehicle_id', component: DetailsComponent},
  { path: 'brunches', component:BrunchesComponent},
  { path: 'about', component:AboutComponent},
  { path: 'contacts', component:ContactsComponent},
  { path: 'review', component:ReviewComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'archive', component:MyBookingsComponent, canActivate:[AuthGuardGuard]},
  { path: 'terms&condition', component:TermsConditionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
