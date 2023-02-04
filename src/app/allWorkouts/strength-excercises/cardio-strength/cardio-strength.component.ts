import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Excercise } from '../../excerciseTS/excercise';

@Component({
  selector: 'unity-cardio-strength',
  templateUrl: './cardio-strength.component.html',
  styleUrls: ['./cardio-strength.component.scss'],
})
export class CardioStrengthComponent extends Excercise implements OnInit {
  constructor(builder: FormBuilder, database: ApiService, http: HttpClient) {
    super(builder, database, http);
  }

  override equipments: string[] = ['Mat', 'Dumbells', 'Rope', 'Rower'];

  workouts = [
    {
      video: '',
      name: 'Kettle bell swing',
      reps: '15 reps',
      sets: '3 sets',
      poster: '',
      formControlName: 'kettleBell',
    },
    {
      video: '',
      name: 'Plate push',
      reps: '1 min',
      sets: '2 sets',
      poster: '',
      formControlName: 'platePush',
    },
    {
      video: '',
      name: 'Rower',
      reps: '1 min',
      sets: '3 sets',
      poster: '',
      formControlName: 'rower',
    },
    {
      video: '',
      name: 'Medicine ball slam',
      reps: '10 reps',
      sets: '3 sets',
      poster: '',
      formControlName: 'medBall',
    },
    {
      video: '',
      name: 'Battle ropes',
      reps: '1 min',
      sets: '3 sets',
      poster: '',
      formControlName: 'battleRopes',
    },
  ];

  ngOnInit(): void {
    this.workoutForm = this.builder.group({
      kettleBell: ['', Validators.requiredTrue],
      platePush: ['', Validators.requiredTrue],
      rower: ['', Validators.requiredTrue],
      medBall: ['', Validators.requiredTrue],
      battleRopes: ['', Validators.requiredTrue],
    });
  }
}
