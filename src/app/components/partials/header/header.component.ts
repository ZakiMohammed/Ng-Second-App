import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ProductType } from 'src/app/models/product';
import { SharedService } from 'src/app/services/shared.service';

declare var window: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  userName: string = '';
  types: ProductType[] = [];
  type: ProductType = null;

  constructor(
    private authService: AuthService,
    private sharedService: SharedService,
    private route: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.types = this.authService.getData().types;
    this.type = this.authService.getData().type;
    this.userName = this.authService.getData().user.username;

    this.sharedService.getAuth().subscribe(auth => {
      this.types = auth.types;
      this.type = auth.type;
    });
  }

  onLogoutClick($event: any) {
    this.authService.clearData();
    window.location = 'home';
  }

  onTypeClick($event: any) {
    let type = this.types.find(i => i.id === +$event.target.value);
    let auth = this.authService.getData();

    auth.type = type;
    
    this.sharedService.setAuth(auth);    
  }

}
