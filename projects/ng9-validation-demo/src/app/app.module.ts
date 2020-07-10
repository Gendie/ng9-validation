import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomFormsModule } from "ng9-validation";
// import { TestdirModule } from './testdir/testdir.module';
// import { StandardModule } from 'standard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule
    // CustomValidatorsModule,//CustomFormsModule,
    // TestdirModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
