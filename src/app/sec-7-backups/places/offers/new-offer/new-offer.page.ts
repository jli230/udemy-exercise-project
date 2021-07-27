import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  place: Place;
  constructor(private route: ActivatedRoute, private navCtrl: NavController,
    private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>
      {
        if (!paramMap.has('placeId')){
          this.navCtrl.navigateBack('/places/tabs/offers');
          return;
        }
        this.place = this.placesService.getPlace(paramMap.get('placeId'));
      });
    }
}
