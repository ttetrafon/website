import { Injectable } from '@angular/core';
import { LogType } from '../models/log-type';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  public log(origin: object, message: string, type: LogType): void {
    let originName = origin.constructor.name;
    switch(type) {
      case LogType.error:
        console.error("[" + originName + "] " + message);
        break;
      case LogType.info:
        console.info("[" + originName + "] " + message);
        break;
      case LogType.log:
        console.log("[" + originName + "] " + message);
        break;
      case LogType.warn:
        console.warn("[" + originName + "] " + message);
        break;
    }
  }

}
