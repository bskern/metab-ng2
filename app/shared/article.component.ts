import { Component, Input } from '@angular/core';

@Component({
    selector: 'article',
    template: `
     <div class="row">
      <div class="col-md-12">
       <div class="content">
       <a target="_blank" href={{urlPrefix}}{{url}} class="title">{{title}}</a>
       </div>
      </div>
     </div>
    `
})
export class ArticleComponent {
    @Input() url:String
    @Input() title:String
    @Input() isReddit:Boolean

     urlPrefix:String = this.isReddit ? 'https://www.reddit.com':'';
}