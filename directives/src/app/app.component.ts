import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  // Two types of directives
  // 1) Structural Directives: Modify the structure of DOM, prefix them with *
  // 2) Attribute Directives: Modify the attributes of Dom Elements
  courses = [
    {
      id: 1,
      name: "course1"
    },
    {
      id: 2,
      name: "course2"
    }
  ]
  viewMode= "map"

  onAdd(){
    this.courses.push({
      id: 4,
      name:"course"
    })
  }

  onRemove(course:any){
    let index = this.courses.indexOf(course)
    this.courses.splice(index,1)
  }

  trackCourse(index: any,course: any){
    return course ? course.id : undefined
  }
  canSave = true
  task = {
    title: "review applications",
    assignee: null
  }
}
