import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  lists;
  title;
  data;
  constructor(private listService: ListService, route: ActivatedRoute) { 
    route.queryParamMap.subscribe(params => {
      this.title = params.get('title');
    })
    listService.getListApi()
    .subscribe(data => {
      this.lists = data;
      this.lists = this.lists.articles.filter(p => p.title === this.title);
      this.lists = this.lists[0];
    })
  }

  ngOnInit() {
  }

  send(form) {
    console.log(form.value);
    form.reset();
  }

}
