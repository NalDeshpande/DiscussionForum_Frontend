

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumserviceService } from 'src/app/forumservice.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user:User=new User();
msg:any='';
constructor(private service:ForumserviceService, private router:Router){}

  ngOnInit(){
   
}

login(){
  this.service.loginUser(this.user).subscribe((data)=>{
    console.log("Response received");
    this.router.navigate(['/home'])

  },(err)=>{
    console.log("Exception occured");
    this.msg="Bad Credentials , please enter valid data";
  })
}

}