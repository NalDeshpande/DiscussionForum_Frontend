import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ForumserviceService } from 'src/app/forumservice.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  post:Observable<Post[]>=of([]);

  constructor(private service:ForumserviceService,private router:Router){}

  isLiked: boolean = false;
  likeCount: number = 0;

  ngOnInit() {
    this.getAllPost();
  }

  getAllPost(){
    this.post=this.service.getAllPost()
  }


  comments: string[] = [];

  addComment() {
    this.comments.push('');
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    this.likeCount += this.isLiked ? 1 : -1;
  }


  postupdate(id:number){
    this.router.navigate(['comment',id]);
  }
}
