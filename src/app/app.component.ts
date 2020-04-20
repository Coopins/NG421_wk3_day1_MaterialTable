import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IEvilBatmen } from './interfaces/ievil-batmen';
import { MEMBERS } from '../app/batman-metal-data';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  displayedColumns: string[] = ['id', 'name', 'earth'];
  datsSource: MatTableDataSource<IEvilBatmen>;
@ViewChild(MatSort, {static: true})sort: MatSort;
  ngOnInit(): void {
    this.datsSource = new MatTableDataSource(MEMBERS);
    this.datsSource.sort = this.sort;
  }
}
