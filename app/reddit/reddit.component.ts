import { Component, OnInit } from '@angular/core';
import { RedditService } from './reddit.service';
import { Reddit } from './reddit';

@Component({
    moduleId: module.id,
    selector: 'reddit',
    templateUrl: 'reddit.component.html'
})
export class RedditComponent implements OnInit {
    constructor(private redditService:RedditService) { }

    scalaSubReddit : Reddit[];
    elmSubReddit : Reddit[];
    reactSubReddit: Reddit[];

    ngOnInit() { 
       this.redditService.getSubReddit("scala").then(resp =>this.scalaSubReddit = resp);
       this.redditService.getSubReddit("elm").then(resp => this.elmSubReddit = resp);
       this.redditService.getSubReddit("reactjs").then(resp => this.reactSubReddit = resp);
    }
}