import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForm';

  // myForm = new FormGroup({
  //   username: new FormControl('',[Validators.required]),
  //   email: new FormControl(),
  //   cno: new FormControl()
  // })


  constructor(private fb: FormBuilder) { }

  myForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    cno: ['', Validators.required]
  })

  submit() {
    console.log(this.myForm.value)
    this.myForm.reset()
  }



}
