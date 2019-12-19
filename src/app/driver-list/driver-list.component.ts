import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {

  displayedColumns = ['name', 'vehicle', 'pricing', 'languages', 'action'];
  dataSource = new MatTableDataSource<any>();
  bookingDetails = {};

  constructor(private dataService: DataService) { }

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

}
