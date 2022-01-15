import { Component, OnInit } from '@angular/core';

import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {

  constructor(private mainService: MainService) {
    console.log("BioComponent started");
  }

  ngOnInit(): void {
    this.mainService.setDocTitle("Bio");
  }

}
