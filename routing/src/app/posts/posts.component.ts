import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';

interface LooseObject {
  [key: string]: any
}


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];


  constructor(private service: PostService) {
    // do not call http req in constructor
  }

  // life cycle hook like component did mount
  ngOnInit(): void {
    this.service.getAll()
      .subscribe((response: any) => {
        this.posts = response
      })
  }

  createPosts(input: HTMLInputElement) {
    const post: LooseObject = { title: input.value }
    // first we will add to the post taking possibility that serve will accept it - Optimistic Approach
    this.posts.splice(0, 0, post)
    input.value = ''
    this.service.create(post)
      .subscribe({
        next: (response: any) => {
          post['id'] = response.id
        },
        error: (error: any) => {
          // If Server throws an error then we will delete it
          this.posts.splice(0, 1)

          if (error instanceof BadInputError) {
            // this.form.setErrors(error.originalError)
          }
          // handling unexpected error
          else throw error
        }
      })
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe({
        next: (response: any) => {
          console.log(response)
        }
      })
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post)
    this.posts.splice(index, 1)


    this.service.delete(post.id)
      .subscribe({
        error: (error: AppError) => {
          this.posts.splice(index, 0, post)
          if (error instanceof NotFoundError) {
            // handling expected error
            alert("post already been deleted")
          } else {
            // handling unexpected error
            throw error
          }
        }
      })
  }

}
