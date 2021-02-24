import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  @Input() lessonIn;

  constructor() {

  }

  ngOnInit(): void {
  }

}
