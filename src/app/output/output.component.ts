import { Component, OnChanges, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnChanges {
    @Input() production: any;
    @Output() onProp = new EventEmitter<string>();

    hidden: boolean = true;
    responseValid: boolean = true;
    title: string;
    year: number;
    time: string;
    stars: number;
    votes: number;
    director: string;
    genre: string;
    started: string
    description: string;
    imgPath: string;
    type: string;
    sezons: number;

    ngOnChanges(changes : any) {
        let newProduction = changes.production.currentValue;

        if(newProduction !== undefined){
            let response = newProduction.Response;

            if(response === 'False'){
                this.responseValid = false;
                this.hidden = true;
            }
            if(response === 'True'){
                this.responseValid = true;
                this.hidden = false;
                this.title = newProduction.Title;
                this.year = newProduction.Year;
                this.time = newProduction.Runtime;
                this.stars = newProduction.imdbRating;
                this.votes = newProduction.imdbVotes;
                this.director = newProduction.Director;
                this.genre = newProduction.Genre;
                this.started = newProduction.Released;
                this.description = newProduction.Plot;
                this.imgPath = newProduction.Poster;
                this.type = newProduction.Type;
                this.sezons = newProduction.totalSeasons;
                this.onProp.emit(this.type);
            }
        }
    }
}
