import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

  constructor(private fb:FormBuilder){
  }

  // using form group
    // formData = new FormGroup({
    // firstname: new FormControl(null,Validators.required),
    // lastname: new FormControl(''),
    //   area: new FormControl(''),
    //   city: new FormControl(''),
    // })

// using form builder

formData=this.fb.group({
  firstname:['', Validators.required],
  lastname:['',Validators.required],
  area:['',Validators.required],
  city:['',Validators.required]
})

    login(){
      console.log(this.formData.value)
     this.formData.reset()
}

color='color:red'

}
