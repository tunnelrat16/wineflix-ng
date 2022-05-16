import {Component} from '@angular/core';
import {faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { wines, heroContent } from './data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wines = wines
  heroContent = heroContent
  faPlay = faPlay
  faInfoCircle = faInfoCircle
  title = 'angular-template';
}
