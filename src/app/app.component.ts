import { Component, ElementRef, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
