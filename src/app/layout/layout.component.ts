import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public trueOnSomeCondition:boolean = false;
  public isGetSomeData:string =""
  constructor() { }

  ngOnInit(): void {
  }

  isShowSideList(){
    this.trueOnSomeCondition = !this.trueOnSomeCondition ;
  }

  feedSomeData(){
    let data ='This is my new story and i am here'
    this.isGetSomeData = data;
  }
}
