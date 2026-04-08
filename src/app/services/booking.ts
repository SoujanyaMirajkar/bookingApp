import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookings: any[] = [];

  constructor() { }

  addBooking(booking: any) {
    this.bookings.push(booking);
  }

  getBookings() {
    return this.bookings;
  }

  deleteBooking(index: number) {
    this.bookings.splice(index, 1);
  }
}