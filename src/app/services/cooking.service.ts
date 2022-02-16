import { Injectable } from '@angular/core';

import { LoggingService } from '../services/logging.service';

import { LogType } from '../models/log-type';

@Injectable({
  providedIn: 'root'
})
export class CookingService {


  constructor(private log: LoggingService) {
    log.log(this, "Started", LogType.info);
  }

  private dataInitialisation(): void {

  }

}
