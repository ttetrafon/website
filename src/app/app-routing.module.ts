import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BioComponent } from './bio/bio/bio.component';
import { CookingComponent } from './cooking/cooking/cooking.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { YadtsComponent } from './yadts/yadts/yadts.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'bio', component: BioComponent },
  { path: 'cooking', component: CookingComponent },
  { path: 'yadts', component: YadtsComponent },
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
