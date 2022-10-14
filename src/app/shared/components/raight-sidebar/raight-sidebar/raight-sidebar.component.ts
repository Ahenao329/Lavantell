import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raight-sidebar',
  templateUrl: './raight-sidebar.component.html',
  styleUrls: ['./raight-sidebar.component.css']
})
export class RaightSidebarComponent implements OnInit {
clickChange: boolean = true
  constructor() { }

  ngOnInit(): void {
  }


 changeIcon(): void{
    
    if(this.clickChange){
      this.clickChange = false
    }
    else
    {
      this.clickChange = true
    }

  }
}
