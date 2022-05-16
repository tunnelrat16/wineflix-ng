import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DrinkButtonComponent } from './drink-button/drink-button.component';
import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { ControlsComponent } from './controls/controls.component';
import { DrinkAgainComponent } from './drink-again/drink-again.component';
import { KeepDrinkingComponent } from './keep-drinking/keep-drinking.component';
import { NewBadgeComponent } from './new-badge/new-badge.component';
import { WineListingComponent } from './wine-listing/wine-listing.component';
import { AmountConsumedComponent } from './amount-consumed/amount-consumed.component';
import { DrinkingWineComponent } from './drinking-wine/drinking-wine.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavComponent,
    UserAvatarComponent,
    NavBarComponent,
    DrinkButtonComponent,
    MoreInfoButtonComponent,
    HeroContentComponent,
    ControlsComponent,
    DrinkAgainComponent,
    KeepDrinkingComponent,
    NewBadgeComponent,
    WineListingComponent,
    AmountConsumedComponent,
    DrinkingWineComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
