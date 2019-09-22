import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataStorageService } from './data-storage.service';
import { Subscription } from 'rxjs';
import { User } from './user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  @ViewChild('f', { static: false }) formSearch;
  UserSubscription: Subscription;
  constructor(private http: HttpClient, private dataStore: DataStorageService) { }
  users: User[] = [];
  ngOnInit() {
    this.users = this.dataStore.getUsers();
    this.UserSubscription = this.dataStore.userChange.subscribe((users => {
      this.users = users.reverse();
    }));
  }
  onSubmit() {
    const id = this.users.length + 1;
    const name = this.formSearch.value.name;
    this.dataStore.postUser(name);
    this.formSearch.reset();
  }
 


}
