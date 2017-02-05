import { NgRedux } from 'ng2-redux/lib/components/ng-redux';
import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';

import { UpcomingActions } from '../upcoming.actions';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  @select(['upcoming', 'items'])
  items$;

  @select(['upcoming', 'error'])
  error$;

  @select(['upcoming', 'isFetching'])
  isFetching$;

  constructor(
    private ngRedux: NgRedux<any>,
    private actions: UpcomingActions
  ) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.ngRedux.dispatch(this.actions.loadStart());
  }

  getItemName(index, item) {
    return item._id;
  }

}