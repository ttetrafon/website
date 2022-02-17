import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private titleService: Title) {
    this.log(this, "Started", console.log);
  }

  // Logging
  public log(origin: object, message: string, fn: Function): void {
    fn("[" + origin.constructor.name + "] " + message);
  }

  // Website Title
  setDocTitle(title: string) {
    // console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(title);
  }

}
