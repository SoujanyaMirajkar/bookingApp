import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.page.html',
  styleUrls: ['./my-bookings.page.scss'],
  standalone: false,
})
export class MyBookingsPage {

  bookings: any[] = [];

  constructor(private bookingService: BookingService) { }

  ionViewWillEnter() {
    this.bookings = this.bookingService.getBookings();
  }

  delete(index: number) {
    this.bookingService.deleteBooking(index);
    this.bookings = this.bookingService.getBookings();
  }
}