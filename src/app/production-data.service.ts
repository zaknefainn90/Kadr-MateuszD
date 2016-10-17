import { Injectable } from '@angular/core';

import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductionDataService {

  constructor(private http: Http) { }

  getProductionFromOMDB(name: string){
      return this.http.get(`http://www.omdbapi.com/?t=${name}&y=&plot=short&r=json`).map(response => response.json());
  }
}
