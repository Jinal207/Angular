import { Component } from '@angular/core';

@Component({
  selector: 'app-cust-pipe',
  templateUrl: './cust-pipe.component.html',
  styleUrls: ['./cust-pipe.component.css']
})
export class CustPipeComponent {
  searchQuery!: any;
  employees: any[];

  constructor() {
    this.employees = [
      {
        firstname: "abc",
        lastname: "abcpatel",
        address: "123 abc abc"
      },
      {
        firstname: "pqr",
        lastname: "pqrpatel",
        address: "123 pqr pqr"
      },
      {
        firstname: "xyz",
        lastname: "xyzpatel",
        address: "123 xyz xyz"
      },
      {
        firstname: "jkl",
        lastname: "jklpatel",
        address: "123 jkl jkl"
      },
    ]
  }
}
