import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {} from 'googlemaps';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cab-booking',
  templateUrl: './cab-booking.component.html',
  styleUrls: ['./cab-booking.component.css']
})
export class CabBookingComponent implements OnInit {
  minDate: object;
  book: any;
  @ViewChild('sourceAddress', {static: false}) sourceAddress: any;

  constructor(private dataService: DataService, private router: Router) {
    this.book = {};
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
  }

  ngOnInit() {
  }

  onBooking() {
    this.book.distance = this.getDistance();
    this.processBooking();
  }

  getSourceAddress(event: any) {
    this.book.source = this.getLatitudeLongitude(event);
    this.book.sourceAddress = event.name;
  }

  getDestinationAddress(event: any) {
    this.book.destination = this.getLatitudeLongitude(event);
    this.book.destinationAddress = event.name;
  }

  getLatitudeLongitude(event: any) {
    const latitude = event.geometry.location.lat();
    const longitude = event.geometry.location.lng();
    return { latitude, longitude };
  }

  getDistance() {
    if (!this.book.source || !this.book.destination) { return; }
    const sourceCity = new google.maps.LatLng(this.book.source.latitude, this.book.source.longitude);
    const destinationCity = new google.maps.LatLng(this.book.destination.latitude, this.book.destination.longitude);
    const meterDistance = google.maps.geometry.spherical.computeDistanceBetween(sourceCity, destinationCity);
    return meterDistance * 0.001; // distance in km
  }

  processBooking() {
    this.dataService.startBooking(this.book);
    this.router.navigate(['/aq-index/drivers']);
  }

}
