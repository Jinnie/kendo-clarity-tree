import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeDataService } from '../tree-data.service';

import { CdsTreeItem } from '@cds/core/tree-view';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-clarity-core-ng',
  templateUrl: './clarity-core-ng.component.html',
  styleUrls: ['./clarity-core-ng.component.css'],
})
export class ClarityCoreNgComponent {

  expand = false;
  items = [];

  constructor(private service: TreeDataService) {
    // setTimeout(() => {
    //   this.expand = true;
    // }, 5000);
  }

  ngOnInit() {
    this.fetchChildren('').pipe(take(1)).subscribe((data: any[]) => {
      this.items = data.map(item => item.text);
    });
  }

  fetchChildren = (node: any): Observable<any[]> => this.service.getItems(node);

  hasChildren = (node: any): boolean => true;


  onSelectedChange = {
    // handleEvent method is required.
    handleEvent(e: any) {
      const currentNode = e.target as any;
      currentNode.selected = e.detail;
      currentNode.indeterminate = false;
    },
    // event listener objects can also define zero or more of the event
    // listener options: capture, passive, and once.
    capture: true,
  };
}


@Component({
  selector: 'lazy-async-node',
  template: `
    <cds-tree-item expandable (expandedChange)="onExpandedChange($event, name)"
    (selectedChange)="onSelectedChange($event)">
      {{name}}
      <lazy-async-node *ngFor="let item of items" [name]="item" [fetchChildren]="fetchChildren"></lazy-async-node>
      </cds-tree-item>
  `,
})
export class LazyAsyncNode {

  @Input()
  name: string;

  @Input()
  fetchChildren: Function;

  items = [];

  expanded = false;

  onExpandedChange(e: any, prefix: string) {
    const parentNode = e.target as CdsTreeItem;
    parentNode.expanded = !parentNode.expanded;
    parentNode.loading = true;

    if (parentNode.expanded) {
        parentNode.loading = false;
        this.fetchChildren(this.name).pipe(take(1)).subscribe((data: any[]) => {
          this.items = data.map(item => item.text);
        });
    } else {
      parentNode.loading = false;
      this.items = [];
    }
    this.expanded = parentNode.expanded;
  }


  onSelectedChange = (e: any) => {
    // handleEvent method is required.
    // handleEvent(e: any) {
      const currentNode = e.target as any;
      currentNode.selected = e.detail;
      currentNode.indeterminate = false;
    // },
    // event listener objects can also define zero or more of the event
    // listener options: capture, passive, and once.
    // capture: true,
  };
}


