import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { YadtsRuleLibraryService } from './services/yadts-rule-library.service';
import { YadtsComponent } from './yadts/yadts/yadts.component';
import { BioComponent } from './bio/bio/bio.component';
import { MainService } from './services/main.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    YadtsComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MainService,
    YadtsRuleLibraryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
