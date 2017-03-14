import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SignUpFormComponent } from './sign-up-form.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, SignUpFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
