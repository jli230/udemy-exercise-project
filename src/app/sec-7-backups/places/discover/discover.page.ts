import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Place } from '../places.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];

  constructor(private placesService: PlacesService,
    private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  onOpenMenu() {
    this.menuCtrl.toggle('m1');
  }

}
