import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenApproachComponent } from './template-driven-approach/template-driven-approach.component';
import { ReactiveApproachComponent } from './reactive-approach/reactive-approach.component';
import { ReactiveApproachFormarrayComponent } from './reactive-approach-formarray/reactive-approach-formarray.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenApproachComponent,
    ReactiveApproachComponent,
    ReactiveApproachFormarrayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
