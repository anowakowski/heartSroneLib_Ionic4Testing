import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../shared/card.service';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {

  cardDeckGroup: string;
  cardDeck: string;
  cards: any[] = [];

  constructor(private route:ActivatedRoute, private cardService:CardService) { }

  ionViewWillEnter(){
    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');

    this.cardService.getCardByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
      (cards) => {
        this.cards = cards;
      })
  }

}
