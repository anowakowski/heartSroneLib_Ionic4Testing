import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {CardDeck} from './card.model';

@Injectable()
export class CardService{

    private HS_API_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com';
    private HS_API_KEY = '6E1lMwMWrsmshufAcOkHVtOF9Yuyp1vKHIhjsn5fHA3Aldyxgn';

    private readonly cardDecks: string[] = ['Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman', 'Priest', 'Warlock', 'Hunter', 'Paladin'];

    constructor(private http: HttpClient){

    }

    public GetCardDecks(): Observable<CardDeck[]> {
        //debugger;

        const headers = new HttpHeaders({'X-Mashape-Key': this.HS_API_KEY});

        return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, {headers});

        //return ObservableOf(this.cardDecks);
    }


}