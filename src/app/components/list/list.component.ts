import { Component, OnInit } from '@angular/core';
import { listService } from './list.service';
import { Doctor } from './Doctor.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  DoctorsList: Doctor[] = [];
  constructor(private listServ: listService) { }

  ngOnInit() {
    this.DoctorsList = this.listServ.getDocs();
  }

}
