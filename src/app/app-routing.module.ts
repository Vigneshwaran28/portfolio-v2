import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './main/education/education.component';
import * as path from 'path';
import { MainComponent } from './main/main.component';
import { HeroSectionComponent } from './main/hero-section/hero-section.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'education',component:EducationComponent},
  {path:'',component:HeroSectionComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
