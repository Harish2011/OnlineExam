import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
exam='jsexam'
  constructor() { }

  ngOnInit(): void {
    this.startcoundown();
  }

  @Input() init:number=null;
  public counter:number=0;
  public min:number=null;

  startcoundown()
  {
    this.init=60;
    this.min=1;
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
    console.log("count is ",this.counter);
    
    if(this.counter==0)
    {
      if(this.min==0)
      {
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
