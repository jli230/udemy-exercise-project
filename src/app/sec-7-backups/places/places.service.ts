/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/1200px-Above_Gotham.jpg',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'Romantic place in Paris',
      'https://miro.medium.com/max/1400/1*t-nXIcaD3oP6CS4ydXV1xw.jpeg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://i1.trekearth.com/photos/138102/dsc_0681.jpg',
      99.99
    )
  ];
  constructor() { }
  get places(){
    return [...this._places];
  }
  getPlace(id: string){
    return {...this._places.find(
      p => p.id === id)};
  }
}
