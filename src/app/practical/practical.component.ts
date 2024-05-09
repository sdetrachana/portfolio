import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-practical',
  templateUrl: './practical.component.html',
  styleUrls: ['./practical.component.scss']
})
export class PracticalComponent implements OnInit {
  @Input() getsomeData:string = '';
  @Input() isList:boolean =false;

  @Input() allData:any;

  constructor() { }

  ngOnChanges(c:SimpleChange) { console.log("onchanges data is", this.allData); } 

  ngOnInit(): void {
  }
  // printAllData(){
  //   console.log('receiving all data' , this.allData );
  // }
}
