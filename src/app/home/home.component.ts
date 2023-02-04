import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'unity-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  date = new Date();
  router!: Router;
  db = require('/db.json');
  dbLastIndex: number = this.db.Workout.length - 1;
  constructor() {}

  pageNav = [
    {
      icon: 'fitness_center',
      title: 'Workout videos',
      statement: 'Get those blood pumping with these tutorials.',
      link: '/workouts',
      link_message: 'Find your workouts here',
    },
    {
      icon: 'contact_page',
      title: 'About Us',
      statement: 'Want to know the research and goal behind our website?',
      link: '/about',
      link_message: 'Learn more here',
    },
  ];

  pageGuide = [
    {
      title: 'BEGINNER',
      image: 'assets/images/girl-squat.png',
      alt: 'Girl squatting',
      packageType: '30-40 min daily',
      type: 'Mix low-imapct excercises',
      href: '/workouts/#beginner-workout',
    },
    {
      title: 'STRENGTH',
      image: 'assets/images/girl-plank.png',
      alt: 'Girl doing crunches',
      packageType: '40-60 min daily',
      type: 'Mix intense excercises',
      href: '/workouts/#strength-workout',
    },
  ];

  getTime(): string {
    if (this.isLast()) {
      return this.date.toLocaleDateString();
    } else {
      return this.date.toLocaleDateString();
    }
  }

  workoutCompleted(): string {
    if (this.isLast()) {
      return this.db.Workout[this.dbLastIndex].title;
    } else {
      return 'You did not complete any';
    }
  }

  isLast(): boolean {
    if (
      this.db.Workout[this.dbLastIndex].date === this.date.toLocaleDateString()
    ) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {}
}
