import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, observable, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


// combine latest combines two observable and convertthem to one observable and we can subscribe to that observable

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private route1: Router) { }

  ngOnInit(): void {

    // -------------------------------------- url parameters --------------------------------

    // let id = this.route.snapshot.paramMap.get("id")
    // if your follower/:id route would not be navigated to another same follower/:id  page, then only

    // this.route.paramMap.subscribe({
    //   next: (params: any) => {
    //     let id = +params.get("id")
    //     console.log(id)
    //   }
    // })
    // if your follower/:id route would be navigated to another same follower/:id  page, then only


    // -------------------------------------- query strings --------------------------------
    // this.route.queryParamMap.subscribe()

    // ------------------------------------- using both -------------------------------------
    let obs = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])

    obs.subscribe({
      next: combined => {
        console.log(combined)
      }
    })
  }

  submit(){
    console.log("yamade ")
    this.route1.navigate(["/followers"], {
      queryParams: {
        page: 2,
        order: "trending"
      }
    })
  }

}
