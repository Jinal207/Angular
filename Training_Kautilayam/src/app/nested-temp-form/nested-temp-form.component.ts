import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-temp-form',
  templateUrl: './nested-temp-form.component.html',
  styleUrls: ['./nested-temp-form.component.css']
})
export class NestedTempFormComponent {

  model: any = {
    uid: "",
    name: "",
    age: "",
    address: {
      houseNo: "",
      addressLine1: "",
      addressLine2: "",
      country: "",
      state: "",
      city: "",
    },
  }

  onSubmit(f: any): void {
    if (f.invalid) {
      return;
    }
    console.log(f.value)
  }
}
