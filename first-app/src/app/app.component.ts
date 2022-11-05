import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  post = {
    title: "The great Angular course",
    isFavourite: true,
    students: 30123,
    price: 190.95,
    releaseDate : new Date(2016, 3,1)
  }
  onFavouriteChange(isFavourite:boolean){
    console.log("Favourite Change")
    console.log(isFavourite)
  }
}
