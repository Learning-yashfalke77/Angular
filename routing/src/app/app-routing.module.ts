import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';

// put most specific routes at start

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'followers/:id/:username', component: GithubProfileComponent
  },
  {
    path: 'followers', component: GithubFollowersComponent
  }, 
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
