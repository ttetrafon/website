import { Component, OnInit } from '@angular/core';

import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.scss']
})
export class CookingComponent implements OnInit {

  constructor(private mainService: MainService) {
    console.log("CookingComponent started");
  }

  ngOnInit(): void {
    this.mainService.setDocTitle("Cooking");
  }

}
