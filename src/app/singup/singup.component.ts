import {Component} from '@angular/core';
import {UserProfile} from '../core/models/userProfile';
import {UserService} from '../core/user.service';

@Component({
  moduleId: module.id,
  selector: 'trip-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  user: UserProfile = new UserProfile();
  dateHelper: String;

  constructor(private service: UserService) {
    console.log(this.user);
  }

  register(event: Event) {
    event.preventDefault();
    console.log(this.user);
    console.log(JSON.stringify(this.user));
    this.service.register(this.user).subscribe(
      res => {
        console.log(res);
      }, error => console.log(error));
  }
}
