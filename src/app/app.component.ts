import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

import { ProductionDataService } from './production-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductionDataService]
})
export class AppComponent {
  production: any;
  value: string;
  red: boolean = true;
  green: boolean = false;

  constructor(private productionDataService: ProductionDataService) { }

  changed(value: string) {
    this.value = value;

    if (value === 'series') {
      this.red = true;
      this.green = false;
    }

    if (value === 'movie') {
      this.green = true;
      this.red = false;
    }
  }

  searchInDB(name: string) {
    this.productionDataService.getProductionFromOMDB(name)
      .subscribe(
      production => this.production = production,
      error => console.error('Error: ' + error),
      () => console.log('Załadowano: ' + this.production.Title)
      );
    this.productionDataService.getProductionFromOMDB(name)
      .subscribe(
      production => this.production = production,
      error => console.error('Error: ' + error),
      () => console.log('Załadowano: ' + this.production.Title)
      );
  }

  setClasses() {
    let classes = {
      red: this.red,
      green: this.green
    };
    return classes;
  }
}
