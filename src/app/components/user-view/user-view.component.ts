import { Component, OnInit } from '@angular/core';
import { ProductData, Product } from 'src/app/models/product';

@Component({
	selector: 'app-user-view',
	templateUrl: './user-view.component.html',
	styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

	item: Product = null;
	list: Product[] = [];
	listFiltered: Product[] = [];

	_searchText: string = '';
	
	get searchText(): string {
		return this._searchText;
	}
	set searchText(value: string) {		
		this._searchText = value;
		if (!this._searchText) {
			this.listFiltered = this.list.concat();
			return;
		}
		this.listFiltered = this.list.filter(i => i.name.toLowerCase().indexOf(this._searchText.toLowerCase()) !== -1);
	}

	constructor() {
	}

	ngOnInit() {
		this.list = new ProductData().getProducts();
		this.listFiltered = this.list.concat();
	}

	onItemClick($event: any, selectedItem: Product) {
		this.item = selectedItem;
	}

}
