import {Routes, RouterModule} from '@angular/router';
import {SingupComponent} from './singup/singup.component';
import {SinginComponent} from './singin/singin.component';
import {TripComponent} from './trip/trip.component';
import {AuthGuard} from './guard/auth.guard';

const appRoutes: Routes = [
  {path: 'cadastro', component: SingupComponent},
  {path: 'login', component: SinginComponent},
  {path: 'destino', component: TripComponent},
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
