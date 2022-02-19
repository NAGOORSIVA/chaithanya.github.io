import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  wdata:any;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getNobleResults().subscribe(
      data => {
        this.wdata = data;
        console.log(data);
      })
  }

  generateTable(){
    console.log("hello");
    this.wdata = {};
    
  }

}
