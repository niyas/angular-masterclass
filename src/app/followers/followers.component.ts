import { ActivatedRoute } from '@angular/router';
import { FollowersService } from './../services/followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any[];
  constructor(
    private route: ActivatedRoute,
    private service: FollowersService
  ) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
    
    this.route.queryParamMap
      .subscribe(params => {
        console.log(params.get('page'));
      });  
  }

}
