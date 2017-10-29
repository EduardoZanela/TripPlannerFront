import {NgModule} from '@angular/core';
import {TripComponent} from './trip.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmMap, AgmMarker } from '@agm/core';

@NgModule({
  declarations: [TripComponent],
  exports: [TripComponent],
  imports: [NgbModule, AgmMap, AgmMarker]
})
export class TripModule {}
