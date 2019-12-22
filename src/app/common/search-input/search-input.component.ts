import { Component, OnInit, Input, Output, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import {} from 'googlemaps';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit, AfterViewInit {
  @Input() placeType: string;
  @Input() isDisabled: string;
  @Input() isRequired: string;
  @Input() setDefaultAddress: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('address', {static: false}) address: any;

  autoCompleteInput: string;
  queryWait: boolean;
  defaultOptions: object;
  constructor() {
    this.autoCompleteInput = '';
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  getPlaceAutocomplete() {
    this.defaultOptions = {
      componentRestrictions: { country: 'IN' },
      types: [this.placeType]
    };
    const autocomplete = new google.maps.places.Autocomplete(this.address.nativeElement, this.defaultOptions);
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.invokeEvent(place);
    });

    if (this.setDefaultAddress === 'true') {
      const map = new google.maps.Map(this.address.nativeElement, {
        center: {lat: 12.9715987, lng: 77.59456269999998}
      });
      // Default placeId is set to Bangalore
      const request = {
        placeId: 'ChIJbU60yXAWrjsR4E9-UejD3_g',
      };
      const service = new google.maps.places.PlacesService(map);
      service.getDetails(request, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.autoCompleteInput = place.formatted_address;
          this.invokeEvent(place);
        }
      });
    }
  }

  invokeEvent(place: any) {
    this.setAddress.emit(place);
  }
}
