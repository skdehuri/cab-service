import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabBookingService {
  bookingChanged = new Subject<any>();
  currentBooking: any;

  startBooking(book: any) {
    this.currentBooking = book;
    this.bookingChanged.next({ ...this.currentBooking });
  }

  getCurrentBooking() {
    return { ...this.currentBooking };
  }
}
