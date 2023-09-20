import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumserviceService } from 'src/app/forumservice.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
  
  id:number=0;
  post:Post=new Post();

  constructor(private route:ActivatedRoute,private service:ForumserviceService,private router:Router){}

  ngOnInit() {
  this.post=new Post();
  this.id=this.route.snapshot.params['id'];
  this.service.updatePost(this.id).subscribe((data)=>{
    // this.post=data;
  })
  }

  onsubmit(){
    console.log("onsubmit success");
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
