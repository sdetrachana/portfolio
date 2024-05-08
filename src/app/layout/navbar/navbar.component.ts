import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public allNavs:any;
  @Input() isInfo:boolean = false;
  @Input() isWarning:boolean = false;
  @Input() isDanger:boolean = false;
  @Input() isBlue:boolean = false;

  @Input() getsomeData:string = '';
  @Input() isList:boolean =false;

  constructor() { }

  ngOnInit(): void {

    this.allNavs = [
      {id:'001',name:'introduction'},
      {id:'002',name:'summary'},
      {id:'003',name:'skillls'},
      {id:'004',name:'experience'},
      {id:'005',name:'contact'},
    ]

  }

  // changToDanger(){
  //   this.isDanger = true;
  //   this.isBlue = false;
  //   this.isInfo = false;
  //   this.isWarning = false;
  // }
  // changToInfo(){
  //   this.isDanger = false;
  //   this.isBlue = false;
  //   this.isInfo = true;
  //   this.isWarning = false;
  // }
  // changToWarning(){
  //   this.isDanger = false;
  //   this.isBlue = false;
  //   this.isInfo = false;
  //   this.isWarning = true;
  // }
  // changToPrimary(){
  //   this.isDanger = false;
  //   this.isBlue = true;
  //   this.isInfo = false;
  //   this.isWarning = false;
  // }
}
