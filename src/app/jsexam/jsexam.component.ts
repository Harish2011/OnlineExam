import { Component, OnInit } from '@angular/core';
import * as exam from './jsexam.json';
@Component({
  selector: 'app-jsexam',
  templateUrl: './jsexam.component.html',
  styleUrls: ['./jsexam.component.css']
})
export class JsexamComponent implements OnInit {
  jsexam:any=(exam as any).default;
  constructor() { }

  marks()
  {
    alert('Correct Answers : 5')
  }


  ngOnInit(): void {
  }

  
}
