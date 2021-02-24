import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import lessonsData from '../assets/lessons_data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-homework-journalMarks';

  lessons: { id: string; dateLesson: string; lesson: string; theme: string; homework: string; note: string; }[];
  
  constructor(){
    //console.log(lessonsData[0].dateLesson);
    this.lessons = lessonsData;
  }

}
