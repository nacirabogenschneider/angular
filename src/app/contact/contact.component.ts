import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  isCollapsed: boolean = true
  contactData  = {
    'name': 'Nacira Bogenschneider',
    'job': 'Web Developer & Graphic Designer',
    'phone': '0172 / 528 70 69',
    'email': 'mail@nacira.de',
    'web': 'https://www.nacira.de'
  }
  
  constructor() { }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed
  }

  ngOnInit(){

  }

}
