import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  // Input Props in Angular

  favouriteLink = "../../assets/symbol-defs.svg#icon-star";
  favouriteLinkOutline = "../../assets/symbol-defs.svg#icon-star_outline";
  @Input("is-favourite") isFavourite: boolean;   // Taking input props from app component
  @Output("change") change = new EventEmitter()

  handleClick(){
    this.isFavourite = !this.isFavourite
    this.change.emit(this.isFavourite)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
