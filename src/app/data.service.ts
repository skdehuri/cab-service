import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  bookingChanged = new Subject<any>();
  currentBooking: any;
  availableDrivers: any[] = [
    { id: '1', name: 'Devaraj B', pricing: 15, vehicle: 'Silver Etios', languages: ['Kannada']},
    { id: '2', name: 'Krishna V', pricing: 18, vehicle: 'Silver Etios', languages: ['Kannada', 'Hindi']},
    { id: '3', name: 'Shabir Khan', pricing: 20, vehicle: 'Silver Etios', languages: ['Hindi', 'English', 'Kannada']},
  ];

  startBooking(book: any) {
    this.currentBooking = { ...book };
    this.bookingChanged.next({ ...this.currentBooking });
  }

  getCurrentBooking() {
    return { ...this.currentBooking };
  }

  isCurrentBooking() {
    return this.currentBooking != null;
  }

  getAvailableDrivers() {
    return this.availableDrivers.slice();
  }
}
