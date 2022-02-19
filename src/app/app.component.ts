import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getNobleResults().subscribe(
      data => {
        console.log(data);
        
      })
  }

}
