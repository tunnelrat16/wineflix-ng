import { Component } from '@angular/core';
import { heroContent } from "../data";

type HeroContent = {
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.css']
})
export class HeroContentComponent {

  heroContent: HeroContent = heroContent;

}
