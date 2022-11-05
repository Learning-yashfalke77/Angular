import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})

export class AuthFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      UsernameValidators.cannotContainSpace
    ],
      [
        UsernameValidators.shouldBeUnique
      ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  })


  public get username() {
    return this.form.get('username')
  }
  public get password() {
    return this.form.get('password')
  }

  login() {
    // calling server
    // let isValid = authService.login(this.form.value)
    // if (!isValid) {
    //   this.form.setErrors({
    //     invalidLogin: true
    //   })
    // }

    this.form.setErrors({
      invalidLogin: true
    });

  }


  constructor() { }

  ngOnInit(): void {
  }

}
