import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CabBookingComponent } from './cab-booking/cab-booking.component';
import { DriverListComponent } from './driver-list/driver-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'aq-index', pathMatch: 'full'},
  { path: 'aq-index', component: CabBookingComponent},
  { path: 'aq-index/drivers', component: DriverListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
