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
    'java',
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
    'angular.js' 

  ]
  
  skillsToHave = [] 
  response: string
  matchSkills: string= "styled-skill"



  addToArray() :void{
   this.response && this.skillsToHave.push({'skill': this.response, 'match': this.skillsIHave.includes(this.response.toLocaleLowerCase())})
    console.log(this.skillsToHave)
    this.response = ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
