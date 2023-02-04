import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Excercise } from 'src/app/allWorkouts/excerciseTS/excercise';

// declare const onSubmit: any;
@Component({
  selector: 'unity-lowerbody-stretch',
  templateUrl: './lowerbody-stretch.component.html',
  styleUrls: ['./lowerbody-stretch.component.scss'],
})
export class LowerbodyStretchComponent extends Excercise implements OnInit {
  override equipments: string[] = ['Barbell', 'Dumbell', 'Mat'];

  workouts = [
    {
      video: '',
      name: 'Pigeon',
      reps: '1 min',
      sets: '2 sets',
      poster: '',
      formControlName: 'pigeon',
    },
    {
      video: '',
      name: 'Hip Flexor Lunge',
      reps: '10 reps',
      sets: '2 sets',
      poster: '',
      formControlName: 'hipFlexor',
    },
    {
      video: '',
      name: 'Barbell Squats',
      reps: '10 reps',
      sets: '3 sets',
      poster: '',
      formControlName: 'barbellSquats',
    },
    {
      video: '',
      name: 'Forward Lunge',
      reps: '10 reps',
      sets: '2 sets',
      poster: '',
      formControlName: 'forwardLunge',
    },
    {
      video: '',
      name: 'Calf raises',
      reps: '12 reps',
      sets: '2 sets',
      poster: '',
      formControlName: 'calfRaises',
    },
  ];

  constructor(builder: FormBuilder, api: ApiService, http: HttpClient) {
    super(builder, api, http);
  }

  ngOnInit(): void {
    this.workoutForm = this.builder.group({
      pigeon: ['', Validators.requiredTrue],
      hipFlexor: ['', Validators.requiredTrue],
      barbellSquats: ['', Validators.requiredTrue],
      forwardLunge: ['', Validators.requiredTrue],
      calfRaises: ['', Validators.requiredTrue],
    });
  }
}

//If all a button is checked, display message. DONE!
//Also display today's date in homepage
//Log dates completed
