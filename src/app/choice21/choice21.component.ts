import { Component } from '@angular/core';

@Component({
  selector: 'app-choice21',
  templateUrl: './choice21.component.html',
  styleUrls: ['./choice21.component.css']
})
export class Choice21Component {
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
