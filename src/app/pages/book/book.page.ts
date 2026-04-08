import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookingService } from 'src/app/services/booking';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class BookPage implements OnInit {

  name: string = '';
  date: string = '';

  // ✅ Inject service here
  constructor(private bookingService: BookingService) { }

  ngOnInit() { }

  book() {
    const booking = {
      name: this.name,
      date: this.date
    };

    //  Save booking
    this.bookingService.addBooking(booking);

    console.log("Saved booking:", booking);
    console.log("All bookings:", this.bookingService.getBookings());

    alert(`Booking Confirmed for ${this.name} on ${this.date}`);

    //  Reset form
    this.name = '';
    this.date = '';
  }
}