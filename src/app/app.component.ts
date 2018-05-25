import { Component } from '@angular/core';
import { FavourateChangedEventArgs } from './favourate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavourate: true
  }

  onFavourateChanged(eventArgs: FavourateChangedEventArgs) {
    console.log('Favourate Changed:', eventArgs);
  }

  like = {
    count: 3,
    isSelected: false
  }

  onLikeChange(likeCount: number) {
    this.like.count = likeCount;
  }

  viewMode = 'map';

  courses;

  loadCourses() {
    this.courses = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'}
    ];
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  canSave = true;
}
