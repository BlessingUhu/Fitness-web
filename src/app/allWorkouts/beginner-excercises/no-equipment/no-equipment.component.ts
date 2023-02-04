import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Excercise } from 'src/app/allWorkouts/excerciseTS/excercise';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'unity-no-equipment',
  templateUrl: './no-equipment.component.html',
  styleUrls: ['./no-equipment.component.scss'],
})
export class NoEquipmentComponent extends Excercise implements OnInit {
  constructor(builder: FormBuilder, database: ApiService, http: HttpClient) {
    super(builder, database, http);
  }

  override equipments: string[] = ['Mat'];

  workouts = [
    {
      video: '',
      name: 'Jumping Jacks',
      reps: '15 reps',
      sets: '3 sets',
      poster: '',
      formControlName: 'jumpingJack',
    },
    {
      video: '',
      name: 'Half Burpees',
      reps: '10 reps',
      sets: '2 sets',
      poster: '',
      formControlName: 'halfBurpees',
    },
    {
      video: '',
      name: 'High Knees',
      reps: '30 sec',
      sets: '3 sets',
      poster: '',
      formControlName: 'highKnees',
    },
    {
      video: '',
      name: 'Lunges',
      reps: '10 reps',
      sets: '3 sets',
      poster: '',
      formControlName: 'lunges',
    },
    {
      video: '',
      name: 'Jumping Squats',
      reps: '10 reps',
      sets: '2 sets',
      poster: '',
      formControlName: 'jumpingSquats',
    },
  ];

  ngOnInit(): void {
    this.workoutForm = this.builder.group({
      jumpingJack: ['', Validators.requiredTrue],
      halfBurpees: ['', Validators.requiredTrue],
      highKnees: ['', Validators.requiredTrue],
      lunges: ['', Validators.requiredTrue],
      jumpingSquats: ['', Validators.requiredTrue],
    });
  }
}
