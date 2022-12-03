import { Component, OnDestroy } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Subscription } from 'rxjs';

interface Course {
  name: string;
  price: number;
  author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  // To prevent memory leaks
  // -----method 2
  course$: any;
  singleCourse$: any;

  // ---- method1
  // course: any[] = []
  // courseSubscriptions: Subscription;

  constructor(private db: AngularFirestore){
    // -----method 2
    this.course$ = db.collection('course').valueChanges()

    // ------ method 1
    // this.courseSubscriptions = db.collection('course').valueChanges().subscribe(courses => {
    //   this.course = courses
    // })

    // get one particular course
    this.singleCourse$ = db.doc<Course>('/course/Y5euWiIFjosB1LJiJPY5').valueChanges()
  }

  add(course: HTMLInputElement){
    this.db.collection('/course').add({name: course.value})
  }

  update(course: HTMLInputElement){
    console.log(course.value)
    this.db.doc('/course/oTdo5EnRTE36czFMc3km').update({yash: course.value})
  }

  delete(){
    console.log('defdweff')
    this.db.doc('/course/oTdo5EnRTE36czFMc3km').delete()
  }

  ngOnDestroy(): void {
    // ------ method 1
    // this.courseSubscriptions.unsubscribe()
  }
}
