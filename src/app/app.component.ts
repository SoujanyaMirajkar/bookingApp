import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Book Appointment', url: '/book', icon: 'calendar' },
    { title: 'My Bookings', url: '/my-bookings', icon: 'list' },
  ];
  public labels = [];
  constructor() {}
}
