import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wine-listing',
  templateUrl: './wine-listing.component.html',
  styleUrls: ['./wine-listing.component.css']
})
export class WineListingComponent {
  @Input() isNew? = false;
  @Input() isFinished? = false;


}
