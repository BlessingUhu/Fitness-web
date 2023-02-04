import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Excercise } from '../../excerciseTS/excercise';

@Component({
  selector: 'unity-total-strength',
  templateUrl: './total-strength.component.html',
  styleUrls: ['./total-strength.component.scss'],
})
export class TotalStrengthComponent extends Excercise implements OnInit {
  constructor(builder: FormBuilder, database: ApiService, http: HttpClient) {
    super(builder, database, http);
  }

  override equipments: string[] = ['Mat', 'Dumbells'];

  workouts = [
    {
      video: '',
      name: 'Mountain climbers',
      reps: '1 min',
      sets: '3 sets',
      poster: '',
      formControlName: 'climbers',
    },
    {
      video: '',
      name: 'Burpees',
      reps: '1 min',
      sets: '2 sets',
      poster: '',
      formControlName: 'burpees',
    },
    {
      video: '',
      name: 'Bent-over row',
      reps: '10 reps',
      sets: '3 sets',
      poster: '',
      formControlName: 'dumbellRows',
    },
    {
      video: '',
      name: 'Lateral raise',
      reps: '10 reps',
      sets: '3 sets',
      poster: '',
      formControlName: 'latRaise',
    },
    {
      video: '',
      name: 'Calf press',
      reps: '15 min',
      sets: '3 sets',
      poster: '',
      formControlName: 'calfPress',
    },
  ];

  ngOnInit(): void {
    this.workoutForm = this.builder.group({
      climbers: ['', Validators.requiredTrue],
      burpees: ['', Validators.requiredTrue],
      dumbellRows: ['', Validators.requiredTrue],
      latRaise: ['', Validators.requiredTrue],
      calfPress: ['', Validators.requiredTrue],
    });
  }
}
