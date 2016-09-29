import { Injectable } from '@angular/core';
import {  Http, Response } from '@angular/http';
import { Reddit } from './reddit';

@Injectable()
export class RedditService {

    constructor(private Http: Http) { }

    getSubReddit(sr:String):Promise<Reddit[]> {
     const api = `https://www.reddit.com/r/${sr}.json`
     return this.Http
        .get(api)
        .toPromise()
        .then(response => response.json().data.children.slice(0,10).map(r => new Reddit(r.data.title,r.data.url)))
        .catch(this.handleError);
    }

        private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.essage || error);
    }
}