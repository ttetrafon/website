import { Component, OnInit } from '@angular/core';

import { MainService } from 'src/app/services/main.service';
import { CookingService } from 'src/app/services/cooking.service';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.scss']
})
export class CookingComponent implements OnInit {

  constructor(private mainService: MainService, private cookingService: CookingService) {
    console.log("CookingComponent started");
  }

  ngOnInit(): void {
    this.mainService.setDocTitle("Cooking");
  }

}
