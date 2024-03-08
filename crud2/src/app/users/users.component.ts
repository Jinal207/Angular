import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
declare var $: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userform: any;
  users: any;

  constructor(public fb: FormBuilder, private service: CommonService) {
    this.userform = this.fb.group({
      name: ['', Validators.required],
      mno: ['', Validators.pattern("^[0-9]{10}$")],
      email: ['', Validators.pattern("^[a-z]+@[a-z]+\.[a-z]{3}$")],
      age: ['', Validators.pattern("[0-9]{1,2}")],
      id: []
    })
  }

  ngOnInit(): void {
    this.getAllData()
  }

  submitForm() {
    var type = this.userform.value.id == null ? 'add' : 'update';
    this.service.addData(this.userform.value, type).subscribe(data => {
      if (type == 'add') {
        alert("added")
      }
      else {
        alert("updated")
      }
      this.getAllData()
      this.userform.reset()
      console.log(data);
    })
  }

  getAllData() {
    this.service.getAllData().subscribe(data => {
      console.log("users", data)
      this.users = data
    })
  }

  deleteDataById(id: any) {
    this.service.deleteDataById(id).subscribe(data => {
      alert("deleted")
      this.getAllData()
    })
  }

  updateUser(id: any) {
    this.service.updateUser(id).subscribe(data => {
      console.log(data)
      this.userform.patchValue({
        name: data.name,
        email: data.email,
        age: data.age,
        mno: data.mno,
        id: data.id
      })
    })
  }
}
