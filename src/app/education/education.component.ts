import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationArray= [
    {
      'when': '01.2020 - 03.2020',
      'what': 'Web Developer Bootcamp',
      'where': 'neuefische GmbH'
    },
    {
      'when': '08.2019 - 12.2019',
      'what': 'UX/UI Design - Online Courses',
      'where': 'Interaction Design Foundation'
    },
    {
      'when': '01.2019 - 12.2019',
      'what': 'Web Development - Online Courses',
      'where': 'Udemy.com'
    },
    {
      'when': '04.2007 - 03.2009',
      'what': 'Medieninformatik (BA) without degree',
      'where': 'Beuth Hochschule für Technik Berlin'
    },
    {
      'when': '06.2004 - 08.2006',
      'what': 'Fachinformatikerin Systemintegration',
      'where': 'IHK / probusiness Berlin AG'
    },
    {
      'when': '10.2002 - 03.2004',
      'what': 'Informatik (Dipl.) without degree',
      'where': 'Technische Universität Braunschweig'
    },
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
