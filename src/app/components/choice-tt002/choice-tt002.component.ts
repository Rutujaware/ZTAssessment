import { Component } from '@angular/core';

@Component({
  selector: 'app-choice-tt002',
  templateUrl: './choice-tt002.component.html',
  styleUrls: ['./choice-tt002.component.css']
})
export class ChoiceTT002Component {

  backgroundClose:boolean=true;
  screenLoad:boolean=false;
  constructor(){}

  ngOnInit(){
       
    
    setTimeout(()=>{
      this.screenLoad =true;
    },1000);

  }

  showbackgroun(){
    this.backgroundClose =false;
  }
}
