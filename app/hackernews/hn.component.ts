import { Component, OnInit, OnDestroy } from '@angular/core';
import { HackerNewsService } from './hn.service';
import { HackerNews } from './hn';


@Component({
    moduleId: module.id,
    selector: 'hackernews',
    templateUrl: 'hn.component.html'
})
export class HackerNewsComponent implements OnInit, OnDestroy {
    constructor(private hnService: HackerNewsService) { }

    topHN:any[];
    askHN:HackerNews[];
    itemUrl = (id: String) => `https://news.ycombinator.com/item?id=${id}`;
    topSub: any;
    askSub: any;
    fetch1Sub: any;
    fetch2Sub:any;

    ngOnInit() {
        this.topSub = this.hnService.fetchTopIds().subscribe(data => {
            console.log('hi');
           console.log('data is ',data);
           this.fetch1Sub = this.hnService.fetchArrayOfIds(data).subscribe(topStories => {
               this.topHN = topStories;
           })
        });

        this.askSub = this.hnService.fetchAskIds().subscribe(data => {
            this.fetch2Sub = this.hnService.fetchArrayOfIds(data).subscribe(askStories => {
                this.askHN = askStories.map(story => new HackerNews(story.title, this.itemUrl(story.id),story.id));
            });
        })
    }

    ngOnDestroy(){
        this.topSub.unsubscribe();
        this.askSub.unsubscribe();
        this.fetch1Sub.unsubscribe();
        this.fetch2Sub.unsubscribe();
    }
}