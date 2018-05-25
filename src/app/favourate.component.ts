import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'favourate',
    template: `
        <span class="glyphicon"  
        [class.glyphicon-star-empty] = "!isSelected"
        [class.glyphicon-star] = "isSelected" 
        (click) = "markFavourate()" > </span>
        <br />
        <span> Title </span>    
        <input [(ngModel)] = "title" />
        <span>{{title | titleCase }}</span>
    `
})
export class FavourateComponent {
    @Input('isFavourate') isSelected: boolean
    @Output('change') click = new EventEmitter();
    markFavourate() {
        this.isSelected = !this.isSelected;
        this.click.emit({newValue: this.isSelected}); 
    }

}

export interface FavourateChangedEventArgs {
    newValue: boolean;
}