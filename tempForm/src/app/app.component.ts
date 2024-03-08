import { Component } from '@angular/core';
import { contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tempForm';

  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  onSubmit(f:any) {
    console.log(f.value)
    // f.reset()
    f.resetForm({
      // name:"xyz"
    })
  }

  model = {
    name: "",
    email: "",
    gender: "",
    status: false,
    country: ""
  }
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}






