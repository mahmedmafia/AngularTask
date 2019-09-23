import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from '../Doctor.model';
import { MatDialog } from '@angular/material';
import { FeedbackComponent } from '../feedback/feedback.component';



@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() doc: Doctor;

  ngOnInit() {
  }


  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(FeedbackComponent, {
      width: '400px',
      data: this.doc
    });

    dialogRef.afterClosed().subscribe((result: Doctor) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}

