import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() user: User;
  editMode = false;

  constructor(private dataStore: DataStorageService) { }

  ngOnInit() {
  }
  onEdit(index, value) {
    this.editMode = false;
    this.dataStore.EditUser(index, value);
  }
  onDelete(index) {
    this.dataStore.deleteUser(index);
  }
}
