import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'unity-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  constructor() {}

  bodyPart: string[] = ['Lower Body', 'Upper Body', 'Full Body'];
  intensity: string[] = ['Low', 'High'];

  bodySectionHandler(event: any) {
    const bodySelection = event.target.value;
    localStorage.setItem('parts', bodySelection);
  }

  intensitySelectionHandler(event: any) {
    const intensitySelection = event.target.value;
    localStorage.setItem('intense', intensitySelection);
  }

  beginners = [
    {
      name: 'Lower Body and Stretch',
      description: 'No harmful stress on body',
      time: '40 min',
      type: 'Lower Body',
      routerLink: '/workouts/lowerbody-stretch',
      image: 'assets/images/beginner-1.jpeg',
      intensity: 'Low',
    },
    {
      name: 'Upper Body and HITT',
      description: 'Little to no stress',
      time: '40 min',
      type: 'Upper Body',
      routerLink: '/workouts/upperbody-hitt',
      image: 'assets/images/beginner-2.jpeg',
      intensity: 'Low',
    },
    {
      name: 'Flexibility',
      description: 'Low impact excersie',
      time: '20 min',
      type: 'Full Body',
      routerLink: '/workouts/flexibility',
      image: 'assets/images/beginner-3.jpeg',
      intensity: 'Low',
    },
    {
      name: 'No Equipment',
      description: 'Easy on your muscles',
      time: '30 min',
      type: 'Full Body',
      routerLink: '/workouts/no-equipment',
      image: 'assets/images/beginner-4.jpeg',
      intensity: 'Low',
    },
  ];

  strengths = [
    {
      name: 'Lower Body Strength',
      description: 'Increase muscle mass',
      time: '40 min',
      type: 'Lower Body',
      routerLink: '/workouts/lower-strength',
      image: 'assets/images/strength-1.jpeg',
      intensity: 'High',
    },
    {
      name: 'Upper Body Strength',
      description: 'Increase upper strength',
      time: '40 min',
      type: 'Upper Body',
      routerLink: '/workouts/upper-strength',
      image: 'assets/images/strength-2.jpeg',
      intensity: 'High',
    },
    {
      name: 'Total Body Strength',
      description: 'High impact excersie',
      time: '60 min',
      type: 'Full Body',
      routerLink: '/workouts/total-strength',
      image: 'assets/images/strength-3.jpeg',
      intensity: 'High',
    },
    {
      name: 'Strength with Cardio',
      description: 'Fat burn',
      time: '40 min',
      type: 'Full Body',
      routerLink: '/workouts/cardio-strength',
      image: 'assets/images/strength-4.jpeg',
      intensity: 'High',
    },
  ];

  recommendBeginner(beginner: any): boolean {
    const parts = localStorage.getItem('parts');
    const level = localStorage.getItem('intense');
    let recommend: any;

    if (parts && level) {
      recommend = beginner.type === parts && beginner.intensity === level;
    }
    if (recommend) {
      return true;
    } else {
      return false;
    }
  }

  recommendStrength(strength: any): boolean {
    const parts = localStorage.getItem('parts');
    const level = localStorage.getItem('intense');
    let recommend: any;

    if (parts && level) {
      recommend = strength.type === parts && strength.intensity === level;
    }
    if (recommend) {
      return true;
    } else {
      return false;
    }
  }

  async clearSelection(): Promise<void> {
    localStorage.clear();
   await swal({
      icon: 'info',
      title: 'Sucessfully cleared',
    });
    window.location.reload();
  }

  ngOnInit(): void {}
}

