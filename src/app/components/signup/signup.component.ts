import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForumserviceService } from 'src/app/forumservice.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user:User=new User();
msg:any='';
constructor(private service:ForumserviceService, private router:Router){}

  ngOnInit(){
   
}

  submitForm(){
    this.service.createUser(this.user).subscribe((data)=>{
      console.log("signup succesfully")
      alert("signup succesfully")
      this.msg="Restration Successfully";
      this.router.navigate(['/login'])
    },(error)=>{
      this.msg=error.error;
    });
  }

}
