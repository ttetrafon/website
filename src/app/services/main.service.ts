import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private titleService: Title) {
    console.log("MainService started");
  }

  // Website Title
  setDocTitle(title: string) {
    // console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(title);
  }


}
