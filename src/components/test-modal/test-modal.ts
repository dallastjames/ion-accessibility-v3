import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the TestModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'test-modal',
    templateUrl: 'test-modal.html'
})
export class TestModalComponent {
    text: string;

    constructor(private _view: ViewController) {
        console.log('Hello TestModalComponent Component');
        this.text = 'Hello World';
    }

    public dismiss(): void {
        this._view.dismiss();
    }
}
