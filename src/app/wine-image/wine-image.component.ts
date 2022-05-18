import { Component, Input} from '@angular/core';
import { wines } from "../data";

type Wine = {
  id: number;
  imageUrl: string;
  isNew?: boolean;
  label: string;
  inFinished?: boolean;
  progress?: number;
}

@Component({
  selector: 'app-wine-image',
  templateUrl: './wine-image.component.html',
  styleUrls: ['./wine-image.component.css']
})
export class WineImageComponent {
  wines: Wine[] = wines;
  @Input() isFinished = "false"



}
