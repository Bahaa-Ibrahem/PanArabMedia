import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  lists;

  constructor(private listService: ListService) { 
    listService.getListApi().subscribe(data => {
      this.lists = data;
      this.lists = this.lists.articles
    })
  }

  ngOnInit() {
  }

}
