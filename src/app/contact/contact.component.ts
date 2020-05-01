import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  isCollapsed: boolean = true
  
  constructor() { }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed
  }

  ngOnInit(){

  }

}
