import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Excercise } from 'src/app/allWorkouts/excerciseTS/excercise';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'unity-flexibility',
  templateUrl: './flexibility.component.html',
  styleUrls: ['./flexibility.component.scss'],
})
export class FlexibilityComponent extends Excercise implements OnInit {
  constructor(builder: FormBuilder, database: ApiService, http: HttpClient) {
    super(builder, database, http);
  }

  override equipments: string[] = ['Mat'];

  workouts = [
    {
      video: '',
      name: 'Side Lunge',
      reps: '30 sec',
      sets: '2 sets',
      poster: '',
      formControlName: 'sideLunge',
    },
    {
      video: '',
      name: 'Glute Bridge',
      reps: '10 reps',
      sets: '3 sets',
      poster: '',
      formControlName: 'gluteBridge',
    },
    {
      video: '',
      name: 'Cobra',
      reps: '1 min',
      sets: '3 sets',
      poster: '',
      formControlName: 'cobra',
    },
    {
      video: '',
      name: 'Butterfly',
      reps: '30 sec',
      sets: '3 sets',
      poster: '',
      formControlName: 'butterfly',
    },
    {
      video: '',
      name: 'Lying Quad',
      reps: '30 sec',
      sets: '3 sets',
      poster: '',
      formControlName: 'lyingQuad',
    },
  ];
  
  ngOnInit(): void {
    this.workoutForm = this.builder.group({
      sideLunge: ['', Validators.requiredTrue],
      gluteBridge: ['', Validators.requiredTrue],
      cobra: ['', Validators.requiredTrue],
      butterfly: ['', Validators.requiredTrue],
      lyingQuad: ['', Validators.requiredTrue],
    });
  }
}
