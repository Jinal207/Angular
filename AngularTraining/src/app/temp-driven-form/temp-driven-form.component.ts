import { Component } from '@angular/core';
@Component({
  selector: 'app-temp-driven-form',
  templateUrl: './temp-driven-form.component.html',
  styleUrls: ['./temp-driven-form.component.css']
})
export class TempDrivenFormComponent {

  // fname!: "";
  // lname!: "";
  // email!: string;
  // mno!: number;
  // gender!: string;
  // country!: string;
  // isCheck!: boolean;

  // fname="";
  // lname="";
  // email="";
  // mno="";
  // gender="";
  // adderess="";
  // isCheck="";

  model = {
    fname: "",
    lname: "",
    email: "",
    mno: "",
    gender: "",
    country: "",
    isCheck: ""
  }

  onSubmit(f: any): void {
    console.log(f.value)
    f.resetForm()
  }

}
