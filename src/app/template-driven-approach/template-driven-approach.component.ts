import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-approach',
  templateUrl: './template-driven-approach.component.html',
  styleUrls: ['./template-driven-approach.component.css']
})
export class TemplateDrivenApproachComponent {
  title = 'Batch8-AngularForms';

  
  evtSubmit(form:NgForm){
    console.log("your form is " , form);
  }


  //Here angular provide some status to the element
  //those status list
  
  //valid 
  //Invalid
  //pristine
  //dirty
  //touched
  //untouched


}
