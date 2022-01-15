import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserStorageService } from './services/browser-storage.service';
import { MainService } from './services/main.service';
import { YadtsRuleLibraryService } from './services/yadts-rule-library.service';

import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio/bio.component';
import { CookingComponent } from './cooking/cooking/cooking.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { YadtsComponent } from './yadts/yadts/yadts.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    YadtsComponent,
    BioComponent,
    CookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BrowserStorageService,
    MainService,
    YadtsRuleLibraryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
