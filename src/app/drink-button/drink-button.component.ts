import { Component } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drink-button',
  templateUrl: './drink-button.component.html',
  styleUrls: ['./drink-button.component.css']
})
export class DrinkButtonComponent {
faPlay = faPlay;


}
