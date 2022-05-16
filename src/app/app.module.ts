import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavComponent,
    UserAvatarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
