import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
public start:string="Academic Journey";
public y1:string="2022 - 2024";
public y2:string="2019 - 2022";
public y3:string="2005 - 2019";
public master ="Master of Computer Applications";
public bachelor="Bachelor of Computer Applications";
public mcaContent:string ="Upgraded Myself with more knowledge also develop commucation and leadership skills";
public bcaContent:string = "I started my coding career during my undergraduate degree";
public ugCollege:string = "Jamal Mohamed College";
public pgCollege:string = "Bishop Heber College";


public certifications = [
  {
    title: 'Crash Course on Python',
    institution: 'Google',
    imgSrc: 'https://www.twine.net/blog/wordpress/wp-content/uploads/2022/07/pythonlogo.png',
    link: 'https://www.coursera.org/account/accomplishments/verify/WJU3NFKWVJQA'
  },
  {
    title: 'Python',
    institution: 'HackerRank',
    imgSrc: 'https://1.bp.blogspot.com/-mJ2YP9rzBjg/XvwLXDqZ3XI/AAAAAAAAKfM/kq8Y6bvq-LUCWFxch1YVHVXnOj3foFWvACK4BGAsYHg/w1200-h630-p-k-no-nu/HackerRank_Icon-1000px.png',
    link: 'https://www.hackerrank.com/certificates/aba30bf7659e?hr_r=1&utm_campaign=social-buttons&utm_medium=linkedin&utm_source=certificate_social_share&social=linkedin'
  },
  {
    title: 'Scientific Computing on Python',
    institution: 'freecodecamp',
    imgSrc: 'https://i.pcmag.com/imagery/reviews/01tPXClg2WjLamQzScplH3y-15.fit_lim.size_1200x630.v1627670281.png',
    link: 'https://www.freecodecamp.org/certification/fcca463c318-1566-422f-8b67-74aead2fd082/scientific-computing-with-python-v7'
  },
  {
    title: 'Web Development',
    institution: 'John Hopkins University',
    imgSrc: 'https://1000logos.net/wp-content/uploads/2022/07/Johns-Hopkins-University-Logo-2048x1152.jpg',
    link: 'https://www.coursera.org/account/accomplishments/certificate/7RKVMVN53KFJ'
  },
  {
    title: 'Python for Data Science',
    institution: 'NPTEL',
    imgSrc: 'https://www.dbgidoon.ac.in/wp-content/uploads/2018/10/NPTEL.jpg',
    link: 'https://drive.google.com/file/d/1dZVpMy0I1v14B-VRKhnPpas5QTjTwLwE/view'
  }
];
  constructor() { }

  ngOnInit() {
    const boxes = document.querySelectorAll('.timeline-box');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target); // Stop observing once the animation is applied
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the box is visible
    });

    boxes.forEach(box => {
      observer.observe(box);
    });
  }
}