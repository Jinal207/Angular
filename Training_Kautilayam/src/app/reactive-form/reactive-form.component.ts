import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent {

  isSubmited: boolean = false;
  address!:FormArray

  constructor(private fb: FormBuilder) { }

  userForm = this.fb.group({
    id: ['', Validators.required],
    name:['', Validators.required],
    age: ['', [Validators.required, Validators.min(18), Validators.max(75)]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    address: this.fb.array([])
  });

  onSubmit(): void {
    this.isSubmited = true;
    if (this.userForm.invalid) {
      return;
    }
    console.log(this.userForm.value);
  }

  createItem(): FormGroup {
    return this.fb.group({
      addressLine1: ['', Validators.required],
          addressLine2: [''],
          landmark:['', Validators.required],
          country: ['', Validators.required],
          state: ['', Validators.required],
          city: ['', Validators.required],
    });
  }

  addItem(): void {
    this.address = this.userForm.get('address') as FormArray;
    this.address.push(this.createItem());
  }

}

