import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AnimateModule} from 'primeng/animate';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeroSectionComponent } from './main/hero-section/hero-section.component';
import { EducationComponent } from './main/education/education.component';
import {SplitterModule} from 'primeng/splitter';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './main/skills/skills.component';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    EducationComponent,
    PageNotFoundComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimateModule,
    SplitterModule,
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    PanelModule,
    OrganizationChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
