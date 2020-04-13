import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  checkbox1=false
  uname=''
  upass=''
  countdown='countdown'

  checkbox()
  {
    if(this.upass=='')
    {
      alert('your  password is empty please check')
    }
    this.checkbox1=!this.checkbox1;
  }

  check()
  {
    if(this.uname =="admin" && this.upass=="1234")
    {
      location.replace('intrustions')
    }
    else
    {
      alert('invalid details')
    }

  }



  ngOnInit(): void {
  }

}
