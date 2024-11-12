import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css','./header-animations.css']
})
export class HeroSectionComponent implements OnInit {
public contactContent:string ="I'm excited about the opportunity to contribute to your projects! Reach out to discuss potential collaboration or interview opportunities."
public authorContent:string="A self-proclaimed code whisperer with a knack for turning caffeine into clean, bug-free code. If there's a problem in the code matrix, he’ll find it—and probably give it a sarcastic name too. Always on the lookout for the next tech challenge, Vigneshwaran combines the focus of a quantum computer with the adaptability of a chameleon in a Wi-Fi zone.";
public author = 'Vigneshwaran';
public displayBasic=false;
public projects =[
  {
    name :'Digital Diary',
    type :'Personal Project',
    desc :'This project aims to create a digital platform for daily journaling, facilitating the documentation of daily incidents and events to preserve memories in written form.',
    link:'https://github.com/Vigneshwaran28/diary_note',
   },
  {
    name :'Job Portal Management',
    type :'Academic Project',
    desc :'This project is dedicated to constructing a robust system for managing job portals. It aims to streamline the process of organizing job listings, applicant profiles, and recruitment procedures, enhancing efficiency and effectiveness in hiring workflows..',
    link:'https://github.com/Vigneshwaran28/Job-Portal-Management/tree/main',
   },
  {
    name :'Tour Of Heroes',
    type :'Full Stack Project',
    desc :'Angular and Django with login authentication and much more fun...',
    link:'https://vigneshwaran28.github.io/tourOfHero/',
   },
]
  constructor() { }

  ngOnInit(): void {
  }

  showBasicDialog() {
    this.displayBasic = true;
}


}
