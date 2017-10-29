import {NgModule} from '@angular/core';
import {SinginComponent} from './singin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SinginComponent],
  exports: [SinginComponent],
  imports: [NgbModule]
})
export class SinginModule {}
