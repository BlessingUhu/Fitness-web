import { NgSwitchDefault } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import swal from 'sweetalert';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'unity-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[^ @]*@[^ @]*'),
          Validators.email,
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signup() {
    if (this.signupForm.valid) {
      this.api.signUp(this.signupForm.value).subscribe({
        next: async (value) => {
          console.log('Signup Sucessful');
         await swal({
            icon: 'success',
            title: 'Account created successfully!',
            timer: 4000,
          });
          this.signupForm.reset();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
          swal({
            icon: 'error',
            title: 'Something went wrong',
            text: `Please check back later`,
          });
        },
        complete: () => {
          console.info('Sign up complete');
        },
      });
    } else {
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Your Inputs are Invalid!',
      });
    }
  }
}
