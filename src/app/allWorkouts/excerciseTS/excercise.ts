import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import swal from 'sweetalert';

export class Excercise {
  public equipments: string[] = [];
  protected workoutForm!: FormGroup;
  public date = new Date();

  constructor(
    protected builder: FormBuilder,
    protected database: ApiService,
    public http: HttpClient
  ) {}

  async onSubmit() {
    await this.displayAlerts();

    //DATABASE STUFF
    if (this.workoutForm.valid) {
      const databaseData = {
        title: document.getElementById('workoutTitle')?.textContent,
        numOfWorkouts: this.getCount(),
        date: this.getDate(),
      };
      this.database.postWorkout(databaseData).subscribe({
        next: (v) => {
          console.info('Successful');
        },
        error: (e) => {
          console.info(e);
        },
        complete: () => {
          console.info('Complete');
        },
      });
    }
  }

  public getTotalControl(): number {
    let count = 0;
    for (let feild in this.workoutForm.controls) {
      count++;
    }
    return count;
  }

  getDate() {
    return this.date.toLocaleDateString();
  }

  public getCount(): number {
    let isChecked = true;
    let count = 0;
    for (let feild in this.workoutForm.controls) {
      isChecked = this.workoutForm.controls[feild].value;
      if (isChecked) {
        count++;
      }
    }
    return count;
  }

  public isChecked(param: any): boolean {
    let isChecked = true;
    for (let feild in this.workoutForm.controls) {
      isChecked = this.workoutForm.controls[param].value;
      if (isChecked) {
        return true;
      }
    }
    return false;
  }

  public async displayAlerts() {
    let remain: number = this.getTotalControl() - this.getCount();

    if (remain === 1) {
      await swal({
        title: 'ALMOST THERE!',
        text: 'Just ' + remain + ' more workout to go!',
        icon: 'info',
        buttons: {
          confirm: { text: 'OK' },
        },
      });
    } else if (
      this.getCount() < this.getTotalControl() &&
      this.workoutForm.invalid
    ) {
      await swal({
        title: 'BEFORE YOU GO..',
        text: 'You have ' + remain + ' remaining.',
        icon: 'warning',
        buttons: {
          confirm: { text: 'OK' },
        },
      });
    } else {
      await swal({
        title: 'GREAT WORK!',
        icon: 'success',
        text: 'You successfully finished your workout session!',
        timer: 5000,
      });
    }
  }
}



//GIVE SUGGESTION OF WORKOUT

//USER CAN VIEW WEBSITE CONTENTS ONLY IF LOGGED IN
