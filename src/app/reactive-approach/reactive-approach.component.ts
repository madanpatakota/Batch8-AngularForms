import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css']
})
export class ReactiveApproachComponent implements OnInit {


  schoolForm : FormGroup;

  ngOnInit() : void{
       this.schoolForm = new FormGroup({
          'schoolName' : new FormControl()
       });
  }

  evtSubmit(){
    console.log(this.schoolForm);
  }



}
