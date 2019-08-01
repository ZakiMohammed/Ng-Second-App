import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { User } from 'src/app/models/user';
import { Helper } from 'src/app/helpers/helper';
import { Pagination } from 'src/app/helpers/pagination';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  pagination: Pagination;
  loader: boolean = false;

  constructor(private postService: PostService) { 
    this.pagination = new Pagination([], 0, 5, [], '', 'title', 'ASC');

    let paginationCallBack = () => {
      this.getPosts(this.pagination.index, this.pagination.count, this.pagination.searchText, this.pagination.orderBy, this.pagination.orderDir);
    };

    this.pagination.nextCallBack = paginationCallBack;
    this.pagination.previousCallBack = paginationCallBack;
    this.pagination.firstCallBack = paginationCallBack;
    this.pagination.lastCallBack = paginationCallBack;
    this.pagination.currentCallBack = paginationCallBack;
    this.pagination.searchCallBack = paginationCallBack;
    this.pagination.orderCallBack = (by: string) => {
      this.getPosts(this.pagination.index, this.pagination.count, this.pagination.searchText, by, this.pagination.orderDir);
    };
  }

  ngOnInit() {
    this.getPosts(this.pagination.index, this.pagination.count, this.pagination.searchText, this.pagination.orderBy, this.pagination.orderDir);
  }

  getPosts(index: number, size: number, search: string = '', orderBy: string = 'title', orderDir: string = 'ASC') {
    this.loader = true;
    this.postService.getPostPagination(index, size, search, orderBy, orderDir).subscribe(response => {
      
      this.pagination.list = response.data;
      this.pagination.totalCount = response.totalCount;                        
      this.pagination.filterCount = response.filterCount;      

      this.pagination.adjustNumbers();
      
      this.loader = false;
    });
  }

}


