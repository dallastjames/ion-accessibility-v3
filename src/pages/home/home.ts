import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TestModalComponent } from '../../components/test-modal/test-modal';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    constructor(
        public navCtrl: NavController,
        private modal: ModalController
    ) {}

    public openModal(): void {
        const alert = this.modal.create(TestModalComponent);
        alert.present();
    }
}
