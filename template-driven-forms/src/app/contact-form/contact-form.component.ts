import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  log(x: any) {
    console.log(x)
  }

  contactMethods = [
    {id: 1, name: "Email"},
    {id: 2, name: "form"}
  ]

  submit(form: NgForm){
    console.log(form)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
