import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../core/authentication.service';
import {UserService} from '../core/user.service';

@Component({
  moduleId: module.id,
  selector: 'trip-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(private authService: AuthenticationService, private userService: UserService, private router: Router) {
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(response => {

      if (response.status === 200) {

        this.userService.getUser().subscribe(user => {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['']);
        });

      }

    });

  }

  ngOnInit(): void {
  }
}
