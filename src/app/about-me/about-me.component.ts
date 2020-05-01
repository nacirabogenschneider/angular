import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  userName: string = "nacirabogenschneider"
  response: any;

  constructor(private http: HttpClient) { }
  search(){
    this.http.get('https://api.github.com/users/'+ this.userName).subscribe((response)=> this.response = response)
  }
  ngOnInit(): void {
  }

}
