import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-header',
    template: `
        <div class="row">
            <div class="col-md-12">
                <div class={{cssClass}}>
                    {{heading}}
                </div>
            </div>
        </div>
    `
})
export class HeaderComponent {
    @Input() cssClass:String;
    @Input() heading:String;
}
