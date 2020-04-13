import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsexamComponent } from './jsexam/jsexam.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from 'src/app/success/success.component';
import { CountdownComponent } from './countdown/countdown.component';
import { InstructionsComponent } from './instructions/instructions.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'intrustions',
    component:InstructionsComponent
  },
  {
    path:'jsexam',
    component:JsexamComponent
  },
  {
    path:'success',
    component:SuccessComponent
  },
  {
    path:'countdown',
    component:CountdownComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
