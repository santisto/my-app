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
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    console.log(this.form.value.mail);
    console.log(this.form.value.password);
  }
}
