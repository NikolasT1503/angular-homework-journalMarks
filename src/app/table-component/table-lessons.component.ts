import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LessonsComponentDataSource, Lessons } from './lessons-component-datasource';

@Component({
  selector: 'table-lessons',
  templateUrl: './table-lessons.component.html',
  styleUrls: ['./table-lessons.component.css']
})
export class TableComponentComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  /* @ViewChild(MatTable) table: MatTable<TableComponentItem>; */
  @ViewChild(MatTable) table: MatTable<Lessons>;
  dataSource: LessonsComponentDataSource;

  displayedColumns = ['id', 'dateLesson', 'theme', 'homework', 'note'];

  ngOnInit() {
    this.dataSource = new LessonsComponentDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
