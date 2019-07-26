import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

declare var window: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  user: User = null;

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.user = this.authService.getData();
  }

  onLogoutClick($event: any) {
    this.authService.clearData();
    // this.route.navigate(['/home']);
    window.location = 'home';
  }

}
