import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabBookingComponent } from './cab-booking/cab-booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SearchInputComponent } from './common/search-input/search-input.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DriverListComponent } from './driver-list/driver-list.component';
import { LoginComponent } from './auth/login/login.component';
import { FinalBookingComponent } from './final-booking/final-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    CabBookingComponent,
    HeaderComponent,
    SidenavListComponent,
    SearchInputComponent,
    DriverListComponent,
    LoginComponent,
    FinalBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
