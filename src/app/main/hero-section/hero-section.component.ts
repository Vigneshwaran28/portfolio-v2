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
  
  constructor() { }

  ngOnInit(): void {
  }

  showBasicDialog() {
    this.displayBasic = true;
}

}
