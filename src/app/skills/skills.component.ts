import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsArray  = [ 
    'HTML', 
    'CSS', 
    'Sass', 
    'JavaScript', 
    'Angular', 
    'Typescript',
    'React', 
    'React-Hooks', 
    'Styled-Components', 
    'Bootstrap',
    'jQuery',
    'Node.js',
    'Git',
    'npm',
    'shell',
    'PHP', 
    'REST',
    'SQL',
    'MongoDB',
    'Express',
    'Jest',
    'Jesmin',
    'Cypress',
    'Adobe Xd',
    'Adobe Photshop',  
    'Adobe Illustrator',
    'Adobe Indesign', 
    'Web Design',
    'Graphic Design',
    'Illustrations',
    'UX/UI Design',
    'Scrum',
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
