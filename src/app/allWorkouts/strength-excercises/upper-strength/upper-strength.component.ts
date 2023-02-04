import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Excercise } from '../../excerciseTS/excercise';

@Component({
  selector: 'unity-upper-strength',
  templateUrl: './upper-strength.component.html',
  styleUrls: ['./upper-strength.component.scss'],
})
export class UpperStrengthComponent extends Excercise implements OnInit {
  constructor(builder: FormBuilder, database: ApiService, http: HttpClient) {
    super(builder, database, http);
  }

  override equipments: string[] = ['Mat', 'Dumbells'];

  workouts = [
    {
      video: '',
      name: 'Overhead presses',
      reps: '10 reps',
      sets: '3 sets',
      poster: '',
      formControlName: 'overhead',
    },
    {
      video: '',
      name: 'Dumbbell bench presses',
      reps: '10 rep',
      sets: '3 sets',
      poster: '',
      formControlName: 'benchPresses',
    },
    {
      video: '',
      name: 'Dumbbell rows',
      reps: '15 reps',
      sets: '3 sets',
      poster: '',
      formControlName: 'dumbellRows',
    },
    {
      video: '',
      name: 'Pushups',
      reps: '10 reps',
      sets: '2 sets',
      poster: '',
      formControlName: 'pushUps',
    },
    {
      video: '',
      name: 'Farmers Walk',
      reps: '1 min',
      sets: '3 sets',
      poster: '',
      formControlName: 'farmersWalk',
    },
  ];

  ngOnInit(): void {
    this.workoutForm = this.builder.group({
      overhead: ['', Validators.requiredTrue],
      benchPresses: ['', Validators.requiredTrue],
      dumbellRows: ['', Validators.requiredTrue],
      pushUps: ['', Validators.requiredTrue],
      farmersWalk: ['', Validators.requiredTrue],
    });
  }
}
