import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({providedIn: 'root'})
export class BookingGuard implements CanActivate {
    constructor(private dataService: DataService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.dataService.isCurrentBooking()) {
            return true;
        } else {
            this.router.navigate(['/aq-index']);
        }
    }
}
