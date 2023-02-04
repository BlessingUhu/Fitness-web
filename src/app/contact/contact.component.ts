import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import swal from 'sweetalert';

@Component({
  selector: 'unity-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private builder: FormBuilder) {}

  contactForm!: FormGroup;

  public sendEmail(e: Event) {
    e.preventDefault();

    if (this.contactForm.valid) {
      emailjs
        .sendForm(
          'service_to9v3ev',
          'template_w695nre',
          e.target as HTMLFormElement,
          'W1GjSZSakCrjky8I0'
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
            swal({
              icon: 'success',
              title: 'You successfully sent the message',
              text: 'I will respond back through email or phone call within 24 hours',
            });
            this.contactForm.reset();
          },
          (error) => {
            console.log(error.text);
            swal({
              icon: 'error',
              title: 'I could not send your message. Please check back later',
            });
          }
        );
    } else {
      swal({
        icon: 'warning',
        title: 'Your inputs are invalid',
      });
    }
  }

  ngOnInit(): void {
    this.contactForm = this.builder.group({
      firstname: ['', [Validators.required, Validators.minLength(1)]],
      lastname: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern('[- +()0-9]+')],
      moretext: ['', [Validators.minLength(1), Validators.maxLength(255)]],
    });
  }
}
