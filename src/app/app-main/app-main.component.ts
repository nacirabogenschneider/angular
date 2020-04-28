import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit {
  inputText: string = "Hier rein schreiben"
  isCollapsed: boolean = true
  constructor() { }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed
  }
  ngOnInit(): void {

  }

}
