import { Injectable } from '@angular/core';
import { HackerNews } from './hn';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class HackerNewsService {

    constructor(private http: Http) { }

    hn = 'https://hacker-news.firebaseio.com/'
    v = 'v0/'
    askEndpoint = `${this.hn}${this.v}askstories.json`;
    topEndpoint = `${this.hn}${this.v}topstories.json`;
    itemEndpoint = (id: String) => `${this.hn}${this.v}item/${id}.json`


    fetchTopIds() {
        return this.http
            .get(this.topEndpoint)
            .map((r) => r.json().slice(0, 15))
            .catch(this.handleError);
    }

    fetchAskIds(){
             return this.http
            .get(this.askEndpoint)
            .map((r) => r.json().slice(0, 15))
            .catch(this.handleError);
    }
    fetchArrayOfIds(ids: any[]) {
        let observableBatch = [];
        ids.forEach((id, idx) => observableBatch.push(this.fetchItem(id)));
        return Observable.forkJoin(observableBatch).catch(this.handleError);
    }

    fetchItem(id: any): Observable<any> {
        return this.http
            .get(this.itemEndpoint(id))
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error:Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Service Error');
    }
}

