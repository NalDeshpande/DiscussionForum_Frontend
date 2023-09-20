import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PostQuestionComponent } from './components/post-question/post-question.component';
import { FeedComponent } from './components/feed/feed.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CommentComponent } from './components/comment/comment.component';

const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
  {
    path:'login',
    component: LoginComponent
  }
,
{
  path:'signup',
  component: SignupComponent
}
,
  {
    path:'ask',
    component: PostQuestionComponent
  }
,
{
  path:'post',
  component: FeedComponent
}
,
{
  path:'home',
  component: HomeComponent
}
,
{
  path:'about',
  component: AboutComponent
}
,
{
  path:'contact',
  component: ContactusComponent
}
,
{
  path:'comment/:id',
  component: CommentComponent
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
