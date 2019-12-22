import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  displayedColumns = ['name', 'vehicle', 'pricing', 'languages', 'action'];
  dataSource = new MatTableDataSource<any>();
  bookingDetails = {};

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getCurrentBooking();
    this.dataSource.data = this.dataService.getAvailableDrivers();
  }

  getCurrentBooking() {
    this.bookingDetails = this.dataService.getCurrentBooking();
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDriverBooking(driver: any) {
    console.log(driver);
    this.router.navigate(['/aq-index/booking']);
  }

}
