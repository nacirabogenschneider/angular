import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  skillsIHave = [
    'javascript',
    'typescript',
    'css',
    'sass',
    'scss',
    'html',
    'react',
    'angular',
    'node',
    'mongodb',
    'mongoose',
    'sql',
    'php',
    'ux design',
    'ui design',
    'graphic',
    'grafik',
    'design',
    'photoshop',
    'illustrator',
    'indesign',
    'gimp',
    'inkscape',
    'wordpress',
    'joomla',
    'express',
    'wireframing',
    'mockup',
    'unit',
    'testing',
    'cypress',
    'git',
    'github',
    'bootstrap',
    'es6',
    'css3',
    'html5',
    'node.js',
    'react.js',
    'angular.js',
    'jquery',
    'frontend',
    'web developer',
    'fullstack',
    'englisch',
    'deutsch',
    'german',
    'english',
    'scrum',
    'kanban',
    'agil',
    'developer',
    'firefox',
    'firestore',
    'mysql'
  ]
  
  skillsToHave = [] 
  response: string
  matchSkills: string= "styled-skill"
  matchies =[]
  matchesInProcent: number

  addToArray() :void{
   this.response && this.skillsToHave.push({'skill': this.response, 'match': this.skillsIHave.includes(this.response.toLowerCase().trim())})
   this.response = ''
  }

  matching():void{
  this.matchies = this.skillsToHave.filter(m => m.match == true)
  this.matchesInProcent = Math.floor(100 /(this.skillsToHave.length / this.matchies.length))
  }

  constructor() { }
  ngOnInit(): void {}

}
