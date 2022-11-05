import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-with-array-value',
  templateUrl: './form-with-array-value.component.html',
  styleUrls: ['./form-with-array-value.component.css']
})
export class FormWithArrayValueComponent implements OnInit {

  form = new FormGroup({
    topics: new FormArray([])
  })

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value))
    topic.value = ''
  }

  removeTopic(topic: AbstractControl){
    let index = this.topics.controls.indexOf(topic)
    this.topics.removeAt(index)
  }


  public get topics() {
    return this.form.get('topics') as FormArray
  }


  getControls() {
    return (this.form.get('topics') as FormArray).controls;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
