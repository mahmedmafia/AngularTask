import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup(
      {
        image: new FormControl(null, Validators.required),
        fullName: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        birthday: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [Validators.required]),
        location: new FormControl(null, [Validators.required]),
      }
    );
  }
  get fullName() {
    return this.registerForm.get('fullName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get imageInput() {
    return this.registerForm.get('image');
  }
  get birthday() {
    return this.registerForm.get('birthday');
  }
  get location() {
    return this.registerForm.get('location');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  onSubmit() {
    console.log(this.registerForm);
    this.router.navigate(['/home']);
  }
}
