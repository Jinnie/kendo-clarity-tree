import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeDataService } from '../tree-data.service';

// import '@cds/core/tree-view/register';
import { html, render } from 'lit-html';

import { CdsTreeItem } from '@cds/core/tree-view';
import { take } from 'rxjs/operators';

let lastSelected = null;

@Component({
  selector: 'app-clarity-core',
  templateUrl: './clarity-core.component.html',
  styleUrls: ['./clarity-core.component.css'],
})
export class ClarityCoreComponent {

  private _expand = false;

  private firstNode;

  set expand(value: boolean) {
    this._expand = value;
    this.onExpandedChange({target: this.firstNode}, 'CLICK!')
  }

  get expand(): boolean {
    return this._expand;
  }


  items = [];

  // args = {nodes: 10};

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
  
  ngAfterViewInit() {
    this.firstNode = document.querySelector('cds-tree-item');
    console.log("FFF", this.firstNode)
  }

  fetchChildren = (node: any): Observable<any[]> => this.service.getItems(node);

  hasChildren = (node: any): boolean => true;


  onSelectedChange = {
    // handleEvent method is required.
    handleEvent(e: any) {
      const currentNode = e.target as any;
      currentNode.selected = e.detail;
      currentNode.indeterminate = false;
      if (lastSelected && lastSelected !== currentNode) {
        lastSelected.selected = false;
      }
      lastSelected = currentNode;
    },
    // event listener objects can also define zero or more of the event
    // listener options: capture, passive, and once.
    capture: true,
  };


  onExpandedChange(e: any, prefix: string) {
    const parentNode = e.target as CdsTreeItem;
    parentNode.expanded = !parentNode.expanded;
    parentNode.loading = true;

    if (parentNode.expanded) {
      parentNode.loading = false;
      const items: any[] = [];
      for (let i=0; i<this.items.length; i++) {
        items.push(lazyAsyncNode(this.items[i], this.fetchChildren));
      }
      render(html`${prefix} ${items}`, parentNode);
    } else {
      parentNode.loading = false;
      render(html`${prefix}`, parentNode);
    }
  }
}

const lazyAsyncNode = (nodeName: string, fetchChildren: Function) => {

  function renderTreeInfo(message: string) {
    const loadingInfo = document.getElementById('loadingInfo');
    if (loadingInfo) {
      loadingInfo.textContent = message;
    }
    
  }
  function onExpandedChange(e: any, prefix: string) {
    const parentNode = e.target as CdsTreeItem;
    parentNode.expanded = !parentNode.expanded;
    parentNode.loading = true;

    if (parentNode.expanded) {
      renderTreeInfo('loading children for item ' + prefix);
      fetchChildren('').pipe(take(1)).subscribe((data: any[]) => {
        data = data.map(item => item.text);
        parentNode.loading = false;
        renderTreeInfo('Finished loading children for item ' + prefix);
        const items: any[] = [];
        for (let i=0; i<data.length; i++) {
          items.push(lazyAsyncNode(data[i], fetchChildren));
        }
        render(html`${prefix} ${items}`, parentNode);
      });
    } else {
      parentNode.loading = false;
      render(html`${prefix}`, parentNode);
    }
  }
  

  const onSelectedChange = {
    // handleEvent method is required.
    handleEvent(e: any) {
      const currentNode = e.target as any;
      currentNode.selected = e.detail;
      currentNode.indeterminate = false;
      if (lastSelected && lastSelected !== currentNode) {
        lastSelected.selected = false;
      }
      lastSelected = currentNode;
    },
    // event listener objects can also define zero or more of the event
    // listener options: capture, passive, and once.
    capture: true,
  };

  return html`
      <cds-tree-item expandable @expandedChange="${(e: any) => onExpandedChange(e, nodeName)}"  @selectedChange="${onSelectedChange}">
        ${nodeName}
      </cds-tree-item>
`;
}




