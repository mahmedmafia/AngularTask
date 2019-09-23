import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ListService } from './list.service';
import { Doctor } from './Doctor.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  // providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }]
})

export class ListComponent implements OnInit {
  DoctorsList: Doctor[] = [];
  constructor(private listServ: ListService) { }

  ngOnInit() {
    this.fetchNextData();
  }

  fetchNextData() {
    this.DoctorsList = this.listServ.getDocs();
    // const randnum=Math.round(Math.random()*200)
    // console.log(randnum);
    // this.DoctorsList.slice(0, randnum);
  }



}
