import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers : any[] = []
  constructor(private service: GithubFollowersService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParamMap.subscribe({})

    this.service.getAll()
      .subscribe({
        next: (followers:any) => (this.followers = followers)
      })
  }

}
