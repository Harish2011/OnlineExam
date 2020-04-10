import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  uname=''
  upass=''
  exam='jsexam'

  check()
  {
    if(this.uname =="admin" && this.upass=="1234")
    {
      location.replace(this.exam)
    }
    else
    {
      alert('invalid details')
    }
  }



  ngOnInit(): void {
  }

}
