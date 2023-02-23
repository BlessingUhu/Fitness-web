import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

type UserObj = {
  name: string
  email: string;
  password: string;
};

type LoginUser = {
  name?: string | undefined;
  email: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //POST WORKOUT
  postWorkout(data: any) {
    return this.http.post<any>('http://localhost:3000/Workout', data);
  }

  getWorkout() {
    return this.http.get('http://localhost:3000/Workout');
  }

  //LOGIN API

  signUp(userObj: UserObj) {
    return this.http.post('https://localhost:7008/api/Login/signup/', userObj);
  }
  login(userObj: LoginUser) {
    return this.http.post('https://localhost:7008/api/Login/login/', userObj);
  }
}