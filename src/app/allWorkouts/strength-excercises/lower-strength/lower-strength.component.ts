import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Excercise } from '../../excerciseTS/excercise';

@Component({
  selector: 'unity-lower-strength',
  templateUrl: './lower-strength.component.html',
  styleUrls: ['./lower-strength.component.scss'],
})
export class LowerStrengthComponent extends Excercise implements OnInit {
  constructor(builder: FormBuilder, database: ApiService, http: HttpClient) {
    super(builder, database, http);
  }

  override equipments: string[] = ['Mat', 'Dumbells', 'Barbell'];

  workouts = [
    {
      video: '',
      name: 'Deadlift',
      reps: '10 reps',
      sets: '3 sets',
      poster: '',
      formControlName: 'deadlift',
    },
    {
      video: '',
      name: 'Leg press',
      reps: '10 rep',
      sets: '3 sets',
      poster: '',
      formControlName: 'legPress',
    },
    {
      video: '',
      name: 'Curtesy lunges',
      reps: '12 reps',
      sets: '3 sets',
      poster: '',
      formControlName: 'curtesyLunges',
    },
    {
      video: '',
      name: 'Barbell squats',
      reps: '10 reps',
      sets: '2 sets',
      poster: '',
      formControlName: 'barbellSquats',
    },
    {
      video: '',
      name: 'Single leg hinges',
      reps: '10 reps',
      sets: '2 sets',
      poster: '',
      formControlName: 'hinges',
    },
  ];

  ngOnInit(): void {
    this.workoutForm = this.builder.group({
      deadlift: ['', Validators.requiredTrue],
      legPress: ['', Validators.requiredTrue],
      curtesyLunges: ['', Validators.requiredTrue],
      barbellSquats: ['', Validators.requiredTrue],
      hinges: ['', Validators.requiredTrue],
    });
  }
}
