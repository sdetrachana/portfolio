import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';

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



  constructor() { }

  ngOnInit(): void {

    this.allNavs = [
      {id:'001',name:'introduction'},
      {id:'002',name:'summary'},
      {id:'003',name:'skillls'},
      {id:'004',name:'experience'},
      {id:'005',name:'contact'},
      {id:'007',name:'practical-parent'},
      // {id:'006',name:'practical'},
    ]
  };


}
