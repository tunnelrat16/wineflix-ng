import { Component, Input } from '@angular/core';
import { wines } from "../data";

type Wine = {
  id: number;
  imageUrl: string;
  isNew?: boolean;
  label: string;
  isFinished?: boolean;
  progress?: number;
}

@Component({
  selector: 'app-drink-again',
  templateUrl: './drink-again.component.html',
  styleUrls: ['./drink-again.component.css']
})
export class DrinkAgainComponent {
  wines: Wine[] = wines;
  finishedWines = wines.filter((wine) => wine.isFinished);
  unfinishedWines = wines.filter((wine) => !wine.isFinished);;



}
