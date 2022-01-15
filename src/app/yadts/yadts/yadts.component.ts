import { Component, OnInit } from '@angular/core';

import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-yadts',
  templateUrl: './yadts.component.html',
  styleUrls: ['./yadts.component.scss']
})
export class YadtsComponent implements OnInit {

  constructor(private mainService: MainService) {
    console.log("YadtsComponent started");
  }

  ngOnInit(): void {
    this.mainService.setDocTitle("YADTS");
  }

}
