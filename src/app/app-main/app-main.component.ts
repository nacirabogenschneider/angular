import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit {
  
  userName: string = "nacirabogenschneider"
  response: any;
  isCollapsed: boolean = true
  
  constructor(private http: HttpClient) { }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed
  }
  search(){
    this.http.get('https://api.github.com/users/'+ this.userName).subscribe((response)=> this.response = response)
  }
  ngOnInit(){

  }

}
