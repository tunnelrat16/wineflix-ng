import { Component, Input } from '@angular/core';
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
  selector: 'app-keep-drinking',
  templateUrl: './keep-drinking.component.html',
  styleUrls: ['./keep-drinking.component.css']
})
export class KeepDrinkingComponent {
  wines: Wine[] = wines;


}
