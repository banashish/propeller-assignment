import { Component, OnInit } from '@angular/core';
import { quickStart } from './../constant'

@Component({
  selector: 'app-quick-access',
  templateUrl: './quick-access.component.html',
  styleUrls: ['./quick-access.component.scss']
})
export class QuickAccessComponent implements OnInit {
  quickStartList = quickStart;
  constructor() { }

  ngOnInit(): void {
  }

}
