import {NgModule} from '@angular/core';
import {SingupComponent} from './singup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SingupComponent],
  exports: [SingupComponent],
  imports: [NgbModule]
})
export class SingupModule {}
