import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-morewinners',
  templateUrl: './morewinners.component.html',
  styleUrls: ['./morewinners.component.css']
})
export class MorewinnersComponent implements OnInit {
  mwdata:any;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getNobleResults().subscribe(
      data => {
        this.mwdata = data;
        console.log(data);
      })
  }

}
