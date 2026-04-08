import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  services = [
    { name: 'Doctor Appointment', price: 500 },
    { name: 'Salon Service', price: 300 },
    { name: 'Gym Trainer', price: 700 }
  ];
  constructor() { }

  ngOnInit() {
  }

}
