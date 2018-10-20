import { Injectable } from '@angular/core';
import { of as ObservableOf, Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {CardDeck} from './card.model';

@Injectable()
export class CardService{

    private HS_API_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com';
    private HS_API_KEY = '6E1lMwMWrsmshufAcOkHVtOF9Yuyp1vKHIhjsn5fHA3Aldyxgn';

    private headers: HttpHeaders;

    constructor(private http: HttpClient){
        this.headers = new HttpHeaders({'X-Mashape-Key': this.HS_API_KEY});
    }

    public GetCardDecks(): Observable<CardDeck[]> {
        //debugger;

        return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, {headers: this.headers});

        //return ObservableOf(this.cardDecks);
    }

    public getCardByDeck(cardDeckGroup:string, cardDeck: string):Observable<any>{
        return this.http.get<any>(`${this.HS_API_URL}/cards/${cardDeckGroup}/${cardDeck}`, {headers: this.headers});
    }


}