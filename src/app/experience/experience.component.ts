import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceArray= [
    {
      'when': '03.2002 - Today',
      'what': 'Graphic -& Web Designer',
      'where': 'Freelancer -  Nacira Design'
    },
    {
      'when': '08.2018 - 12.2018',
      'what': 'Webdesign / CEO Assistance',
      'where': 'mybiscon GmbH'
    },
    {
      'when': '04.2009 - 03.2014',
      'what': 'Owner',
      'where': 'axobar Onlineshop'
    }
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
