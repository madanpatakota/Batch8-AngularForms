import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css'],
})
export class ReactiveApproachComponent implements OnInit {
  schoolForm: FormGroup;

  ngOnInit(): void {
    this.schoolForm = new FormGroup({
      schoolName: new FormControl(null, Validators.required),
      principleName: new FormControl(null, Validators.required),
      principleEmail: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.minLength(10),
        this.allowSpecificDomain,
      ]),
    });

    //this.getName(1)
  }

  evtSubmit() {
    console.log(this.schoolForm);
  }

  // getName(ID:number) : string{
  //    return "Madan";
  // }

  /*** I am preparing this custom valiator for allow only gmail and hotmail */
  allowSpecificDomain(control: AbstractControl): ValidationErrors | null {
    
    //console.log("control is" , control);
    if(control.value != 'gmail' || control.value != 'hotmail'){
       return {
           'notvaliddomain' : true
       }
    }
    return null;
  }

  allowSpecificEmail(control: AbstractControl): ValidationErrors | null {
    //console.log("control is" , control);
    if(control.value ==  'john@gmail.com'){
       return {
           'notallowemail' : true
       }
    }
    return null;
  }
}
