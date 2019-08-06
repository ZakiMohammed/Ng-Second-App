import { Component, OnInit } from '@angular/core';
import { ProductData, Product } from 'src/app/models/product';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
	selector: 'app-user-view',
	templateUrl: './user-view.component.html',
	styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
	
	users: User[] = [];
	user: User = null;

	constructor(private userService: UserService) {
	}

	ngOnInit() {
		this.userService.getUsers().subscribe(users => this.users = users);
	}

	onItemClick($event: any) {
		this.user = $event.item;
	}

}
