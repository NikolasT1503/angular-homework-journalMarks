import { Component, OnInit } from '@angular/core';
import studentsData from '../../assets/students.json';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  students: {'fio' : string, 'photo': string, 'birthday': string}[] = studentsData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
