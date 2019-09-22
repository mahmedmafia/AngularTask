import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../Doctor.model';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() doc: Doctor;
  constructor() { }

  ngOnInit() {
  }

}
