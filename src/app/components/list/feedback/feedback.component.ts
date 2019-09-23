import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Doctor } from '../Doctor.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  private doctor: Doctor;
  private rating;
  stars: any[] = [];
  starsDict = [0, 1, 2];
  feedback: string;
  constructor(
    public dialogRef: MatDialogRef<FeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Doctor
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.IntialStars();
  }
  IntialStars() {
    this.rating = this.data.rating;
    const numofStars = 5;
    const totalFullStars = Math.floor(this.rating);
    const semiHalfStar = this.rating - totalFullStars;
    let semiHalfStarIndex;
    if (semiHalfStar !== 0) {
      semiHalfStarIndex = totalFullStars + 1;
    }
    const EmptyStars = numofStars - Math.round(this.rating);
    console.log(numofStars);
    let i = 0;
    while (i < numofStars) {
      if (i < totalFullStars) {
        this.stars.push(2);
        
      } else if (i === semiHalfStarIndex-1) {
        this.stars.push(1);

      } else {
        this.stars.push(0);
      }
      i++;

    }
    console.log(this.stars);

  }
}
