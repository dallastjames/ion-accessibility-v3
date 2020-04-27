import { NgModule } from '@angular/core';
import { TestModalComponent } from './test-modal/test-modal';
import { IonicModule } from 'ionic-angular';
@NgModule({
    declarations: [TestModalComponent],
    imports: [IonicModule],
    exports: [TestModalComponent]
})
export class ComponentsModule {}
