import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('likesCount') likesCount: number;
  @Input('isSelected') isSelected: boolean;

  onClick() {
    this.isSelected = !this.isSelected;
    this.likesCount += this.isSelected? 1 : -1;
  }

}
