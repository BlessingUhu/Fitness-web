import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'unity-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: [''],
      email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.api.login(this.loginForm.value).subscribe({
        next: async (value) => {
          console.info('Login successfully');
          await swal({
            icon: 'success',
            title: 'Login successful!',
            timer: 4000,
          });
          this.loginForm.reset();
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error(err);
          swal({
            icon: 'error',
            title: `Something went wrong`,
            text: `Signup if you have no account or check your input. If error continues, contact me at Blessing2002.feb@gmail.com`,
          });
        },
        complete: () => {
          console.info('Complete');
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
