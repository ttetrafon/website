import { Component, OnInit } from '@angular/core';

import { CookingService } from 'src/app/services/cooking.service';
import { LoggingService } from 'src/app/services/logging.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.scss']
})
export class CookingComponent implements OnInit {

  constructor(private main: MainService, private cookingService: CookingService) {
    main.log(this, "Started", console.log);
  }

  ngOnInit(): void {
    this.main.setDocTitle("Cooking");
  }


}
