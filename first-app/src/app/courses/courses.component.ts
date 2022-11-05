import { Component, OnInit } from '@angular/core';
import CoursesService from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "List of Courses"
  courses:string[] = [];
  colSpan = 3
  email= "yashfalke77@gmail.com"

  isActive = false
  secondary = true

  

  getTitle(){
    return this.title
  }

  onSave($event: any){
    window.alert("Binded")
    console.log($event)
  }

  onKeyUp(name:any){
    console.log(name.value)
  }
  onKeyUp1(){
    console.log(this.email)
  }

  // -------- Pipes
  myCourses = {
    title: "The great Angular course",
    rating: 4.975,
    students: 30123,
    price: 190.95,
    releaseDate : new Date(2016, 3,1)
  }



  // Injection dependency means injecting or providing dependency to the class

  constructor(service: CoursesService) {
    this.courses = service.getCourses()
  }

  ngOnInit(): void {
  }

}
