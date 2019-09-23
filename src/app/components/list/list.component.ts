import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { Doctor } from './Doctor.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
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
