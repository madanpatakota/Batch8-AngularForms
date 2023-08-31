import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-approach-formarray',
  templateUrl: './reactive-approach-formarray.component.html',
  styleUrls: ['./reactive-approach-formarray.component.css'],
})
export class ReactiveApproachFormarrayComponent implements OnInit {
  userMainForm: FormGroup;

  ngOnInit(): void {
    this.userMainForm = new FormGroup({
      userDetailsArray: new FormArray([
        new FormGroup({
          username: new FormControl(null, Validators.required),
          email: new FormControl(null),
        }),
      ]),
    });
  }

  getFormGroups() {
    let formarray = this.userMainForm.get('userDetailsArray') as FormArray;
    return formarray.controls;
  }

  numbers = [1, 2, 3];
  formarry = [];
  AddNewFormGroup() {
    // want to add new formgrup to the formarry
    //this.numbers.push(4);


    // let a: unknown = 1;
    // a as number


    let formArray = this.userMainForm.get('userDetailsArray') as FormArray;

    formArray.push(
      new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null),
      })
    );
  }
}
