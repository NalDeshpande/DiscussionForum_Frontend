import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForumserviceService } from 'src/app/forumservice.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.css']
})
export class PostQuestionComponent {

  submitted=false;

  post=new Post();

  constructor(private service:ForumserviceService,private router:Router){}

  onsubmit(){
    console.log("onsubmit success");
    this.submitted=true;
    this.save();
  }

  save(){
    console.log("in save");
    this.service.addPost(this.post).subscribe();
    console.log("not save");
    this.goToPost();
    
  }

  goToPost(){
    console.log("ok");
    this.router.navigate(['post']);
    console.log("woking");
  }
}
