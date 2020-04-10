import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsexamComponent } from './jsexam/jsexam.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'jsexam',
    component:JsexamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
