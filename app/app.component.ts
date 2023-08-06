import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion: string = 'teacher';
  answer = '';
  genders = ['M','F'];


  onSubmit(form:NgForm){
    console.log(form);
  }

  suggestUserName(){
    const suggestedUserName='superuser';
    this.signupForm.form.patchValue({userData:{username:suggestedUserName}});
  }
}
