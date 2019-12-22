import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CabBookingComponent } from './cab-booking/cab-booking.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { LoginComponent } from './auth/login/login.component';
import { FinalBookingComponent } from './final-booking/final-booking.component';
import { AuthGuard } from './auth/auth.guard';
import { BookingGuard } from './booking.guard';


const routes: Routes = [
  { path: '', redirectTo: 'aq-index', pathMatch: 'full'},
  { path: 'aq-index', component: CabBookingComponent},
  { path: 'aq-index/drivers', component: DriverListComponent, canActivate: [BookingGuard]},
  { path: 'aq-index/login', component: LoginComponent},
  { path: 'aq-index/booking', component: FinalBookingComponent, canActivate: [AuthGuard, BookingGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
