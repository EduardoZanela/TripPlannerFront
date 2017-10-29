import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';
import { NavModule } from './nav/nav.module';
import { AppComponent } from './app.component';
import { SingupComponent } from './singup/singup.component';
import { SinginComponent } from './singin/singin.component';
import { UserService } from './core/user.service';
import { HttpModule } from '@angular/http';
import {AuthenticationService} from './core/authentication.service';
import {TripComponent} from './trip/trip.component';
import {AuthGuard} from './guard/auth.guard';
import { Ng2CompleterModule } from 'ng2-completer';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    SinginComponent,
    TripComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2CompleterModule,
    routing,
    NavModule,
    HttpModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0wmp5vxDPJajflUvtwvmx8FC-HhmkrcE',
      libraries: ['places']
    }),
    NgbModule.forRoot()
  ],
  providers: [UserService, AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
