import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email, Validators.maxLength(35)]],
      password: ['', Validators.required, Validators.minLength(8), Validators.maxLength(15)],
    });
  }

  login() {
    console.log(this.form.value.mail);
    console.log(this.form.value.password);
  }
  
  get Password () {
    return this.form.get("Password"); 
  }

  
}
