import { Component, OnInit ,Input} from '@angular/core';
import * as exam from './jsexam.json';
import {FormGroup ,FormBuilder} from '@angular/forms';
import {interval,timer} from 'rxjs';
@Component({
  selector: 'app-jsexam',
  templateUrl: './jsexam.component.html',
  styleUrls: ['./jsexam.component.css']
})
export class JsexamComponent implements OnInit {
  
  success='success'
  ans='';
  
  jsexam:any=(exam as any).default;
  employeeForm: FormGroup;
  constructor(private fb:FormBuilder) { 
  }


 


  ngOnInit() {
    this.employeeForm=this.fb.group({
    
      ops:[''],
      
    });
    this.startcoundown();
  }

  onLoadDataClick()
  {
    for(var exam of this.jsexam)
    {
      this.ans=exam.answer
    }
    this.employeeForm.setValue({
      
      ops:this.ans,
     
    })
  }
  check()
  {
    console.log(this.employeeForm.value);
    for(var exam of this.jsexam)
    {
      this.ans=exam.answer
      if(this.employeeForm.get("ops").value==this.ans)
      {
        console.log("correct answer")
      }
      else
      {
        console.log("incorrect answer")
      }

    
  }

  }
  onSubmit():void{
    console.log(this.employeeForm.value);
    for(var exam of this.jsexam)
    {
      this.ans=exam.answer
      if(this.employeeForm.get("ops").value==this.ans)
      {
        console.log("correct answer")
      }
      else
      {
        console.log("incorrect answer")
      }

    }
    location.replace('success')
  }


  @Input() init:number=null;
  public counter:number=0;
  public min:number=null;

  startcoundown()
  {
    this.init=60;
    this.min=30;
    if(this.init && this.init>0)
    {
      this.counter = this.init;
      this.docountdown();
    }
  }
  docountdown()
  {
    setTimeout(()=>{
      
      this.counter=this.counter-1;
      this.proccessCountdown();
    },1000)
  }
  proccessCountdown()
  {
   
    if(this.counter==0)
    {
      if(this.min==0)
      {
        this.onSubmit();
       location.replace('')

      }
      else
      {
        this.counter=60;
        this.min=this.min-1;
        this.docountdown();
      }
      
    }
    else{
      this.docountdown();
    }
  }
  
}
