import { Component, OnInit } from '@angular/core';
import { projects } from './../constant'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  myProjects = projects;
  searchQuery: string;
  constructor() { }

  ngOnInit(): void {
  }

  max(number){
   return Math.min(number,3)
  }
}
