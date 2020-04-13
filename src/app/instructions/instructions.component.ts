import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.startcoundown();
  }

  @Input() init:number=null;
  public sec:number=0;
  public min:number=null;

  startcoundown()
  {
    this.init=60;
    this.min=1;
    if(this.init && this.init>0)
    {
      this.sec = this.init;
      this.docountdown();
    }
  }
  docountdown()
  {
    setTimeout(()=>{
      
      this.sec=this.sec-1;
      this.proccessCountdown();
    },1000)
  }
  proccessCountdown()
  {
    console.log("count is ",this.sec);
    
    if(this.sec==0)
    {
      if(this.min==0)
      {
      location.replace('jsexam')

      }
      else
      {
        this.sec=60;
        this.min=this.min-1;
        this.docountdown();
      }
      
    }
    else{
      this.docountdown();
    }
  }

  skip()
  {
    location.replace('jsexam ')
  }
}
