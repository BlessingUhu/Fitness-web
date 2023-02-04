import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { AboutUsComponent } from './about-me/about-us.component';
import { AppComponent } from './app.component';
import { FlexibilityComponent } from './allWorkouts/beginner-excercises/flexibility/flexibility.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LowerbodyStretchComponent } from './allWorkouts/beginner-excercises/lowerbody-stretch/lowerbody-stretch.component';
import { NoEquipmentComponent } from './allWorkouts/beginner-excercises/no-equipment/no-equipment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { UpperbodyHittComponent } from './allWorkouts/beginner-excercises/upperbody-hitt/upperbody-hitt.component';
import { WorkoutComponent } from './workouts/workout.component';
import { UnityFitnessComponent } from './unity-fitness/unity-fitness.component';
import { LowerStrengthComponent } from './allWorkouts/strength-excercises/lower-strength/lower-strength.component';
import { UpperStrengthComponent } from './allWorkouts/strength-excercises/upper-strength/upper-strength.component';
import { TotalStrengthComponent } from './allWorkouts/strength-excercises/total-strength/total-strength.component';
import { CardioStrengthComponent } from './allWorkouts/strength-excercises/cardio-strength/cardio-strength.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: UnityFitnessComponent },
  { path: 'unity-fitness', component: UnityFitnessComponent },
  { path: 'workouts', component: WorkoutComponent },
  { path: 'workouts/lowerbody-stretch', component: LowerbodyStretchComponent },
  { path: 'workouts/upperbody-hitt', component: UpperbodyHittComponent },
  { path: 'workouts/no-equipment', component: NoEquipmentComponent },
  { path: 'workouts/flexibility', component: FlexibilityComponent },
  { path: 'workouts/lower-strength', component: LowerStrengthComponent },
  { path: 'workouts/upper-strength', component: UpperStrengthComponent },
  { path: 'workouts/total-strength', component: TotalStrengthComponent },
  { path: 'workouts/cardio-strength', component: CardioStrengthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  WorkoutComponent,
  LowerbodyStretchComponent,
  UpperbodyHittComponent,
  NoEquipmentComponent,
  FlexibilityComponent,
  HomeComponent,
  AboutUsComponent,
  ContactComponent,
  SignupComponent,
  LoginComponent,
  NotFoundComponent,
  AppComponent,
  UnityFitnessComponent,
  LowerStrengthComponent,
  UpperStrengthComponent,
  TotalStrengthComponent,
  CardioStrengthComponent,
];
