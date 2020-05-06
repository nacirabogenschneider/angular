import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  isCollapsedProjectOne: boolean = false
  isCollapsedProjectTwo: boolean = false
  isCollapsedProjectThree: boolean = false
  isCollapsedProjectFour: boolean = false
  isCollapsedProjectFive: boolean = false

  toggleCollapseOne() : void{
    this.isCollapsedProjectOne = !this.isCollapsedProjectOne
  }
  toggleCollapseTwo() : void{
    this.isCollapsedProjectTwo = !this.isCollapsedProjectTwo
  }
  toggleCollapseThree() : void{
    this.isCollapsedProjectThree = !this.isCollapsedProjectThree
  }
  toggleCollapseFour() : void{
    this.isCollapsedProjectFour = !this.isCollapsedProjectFour
  }
  toggleCollapseFive() : void{
    this.isCollapsedProjectFive = !this.isCollapsedProjectFive
  }

  constructor() { }

  ngOnInit(): void {
  }

}
