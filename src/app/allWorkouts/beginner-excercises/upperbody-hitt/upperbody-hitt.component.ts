import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import swal from 'sweetalert';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Excercise } from 'src/app/allWorkouts/excerciseTS/excercise';

@Component({
  selector: 'unity-upperbody-hitt',
  templateUrl: './upperbody-hitt.component.html',
  styleUrls: ['./upperbody-hitt.component.scss'],
})
export class UpperbodyHittComponent extends Excercise implements OnInit {
  override equipments: string[] = ['Weight Bench', 'Dumbell', 'Mat'];

  workouts = [
    {
      video: '',
      name: 'Rower',
      reps: '2 min',
      sets: '2 sets',
      poster: '',
      formControlName: 'rower',
    },
    {
      video: '',
      name: 'Burpees',
      reps: '5 reps',
      sets: '2 sets',
      poster: '',
      formControlName: 'burpees',
    },
    {
      video: '',
      name: 'Deadlifts',
      reps: '10 reps',
      sets: '3 sets',
      poster: '',
      formControlName: 'deadlifts',
    },
    {
      video: '',
      name: 'Pushups',
      reps: '10 reps',
      sets: '2 sets',
      poster: '',
      formControlName: 'pushups',
    },
    {
      video: '',
      name: 'Seated Delt Flys',
      reps: '12 reps',
      sets: '2 sets',
      poster: '',
      formControlName: 'deltFlys',
    },
  ];

  constructor(builder: FormBuilder, database: ApiService, http: HttpClient) {
    super(builder, database, http);
  }

  ngOnInit(): void {
    this.workoutForm = this.builder.group({
      rower: ['', Validators.requiredTrue],
      burpees: ['', Validators.requiredTrue],
      deadlifts: ['', Validators.requiredTrue],
      pushups: ['', Validators.requiredTrue],
      deltFlys: ['', Validators.requiredTrue],
    });
  }
}

//IN HOME PAGE, IF WORKOUTS, DONE, DISPLAY CONGRATULATION ELSE IF
//WORKOUTS ARE NOT ALL DONE, THEN STILL SHOW WORKOUTS BUT NO CONGRATS
