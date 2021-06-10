import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeDataService } from '../tree-data.service';

import '@cds/core/tree-view/register.js';
import { html, render } from 'lit-html';

import { CdsTreeItem } from '@cds/core/tree-view';

@Component({
  selector: 'app-clarity-core-multi',
  templateUrl: './clarity-core-multi.component.html',
  styleUrls: ['./clarity-core-multi.component.css'],
})
export class ClarityCoreMultiComponent {

  data = this.service.getItems();
  expand = false;

  constructor(private service: TreeDataService) {
    // setTimeout(() => {
    //   this.expand = true;
    // }, 5000);
  }

  fetchChildren = (node: any): Observable<any[]> => this.service.getItems(node);

  hasChildren = (node: any): boolean => true;



  private args = {nodes: 1000}

  private renderTreeInfo(message: string) {
    document.getElementById('loadingInfo').textContent = message;
  }
  
  onExpandedChange(e: any, prefix: string) {
    const parentNode = e.target as CdsTreeItem;
    parentNode.expanded = !parentNode.expanded;
    parentNode.loading = true;

    if (parentNode.expanded) {
      this.renderTreeInfo('loading children for item ' + prefix);
      setTimeout(() => {
        parentNode.loading = false;
        this.renderTreeInfo('Finished loading children for item ' + prefix);
        const items: any[] = [];
        for (let i=0; i<this.args.nodes; i++) {
          items.push(lazyAsyncNode(this.args));
        }
        render(html`${prefix} ${items}`, parentNode);
      }, 0);
    } else {
      parentNode.loading = false;
      render(html`${prefix}`, parentNode);
    }
  }
  updateBasedOnChildren(node: any) {
    if (node && node.tagName === 'CDS-TREE-ITEM') {
      let oneSelected = false;
      let oneUnselected = false;

      node.indeterminate = false;

      Array.from(node.children).forEach((c: any) => {
        if (c.indeterminate) {
          node.indeterminate = true;
        }
        if (c.selected) {
          oneSelected = true;
          if (oneUnselected) {
            node.indeterminate = true;
          }
        }
        if (!c.selected) {
          oneUnselected = true;
          if (oneSelected) {
            node.indeterminate = true;
          }
        }
      });

      if (!oneSelected) {
        node.selected = false;
      } else if (!oneUnselected) {
        node.selected = true;
      } else {
        node.selected = false;
      }

      this.updateBasedOnChildren(node.parentNode);
    }
  }

  updateChildren(node: any) {
    Array.from(node.children).forEach((c: any) => {
      c.indeterminate = false;
      c.selected = node.selected;
      this.updateChildren(c);
    });
  }

  onSelectedChange(e) {
    // handleEvent method is required.
    // handleEvent(e: any) {
      const currentNode = e.target as any;
      currentNode.selected = e.detail;
      currentNode.indeterminate = false;

      // update children's selected/indeterminate state
      this.updateChildren(currentNode);

      // update ancestors' selected/indeterminate state
      this.updateBasedOnChildren(currentNode.parentNode);
    // },
    // event listener objects can also define zero or more of the event
    // listener options: capture, passive, and once.
    // capture: true,
  // };
  }
}




export const lazyAsyncNode = (args: any) => {

  function renderTreeInfo(message: string) {
    const loadingInfo = document.getElementById('loadingInfo');
    if (loadingInfo) {
      loadingInfo.textContent = message;
    }
    
  }
  function onExpandedChange(e: any, prefix: string) {
    const parentNode = e.target as CdsTreeItem;
    console.log("PPN", parentNode)
    parentNode.expanded = !parentNode.expanded;
    parentNode.loading = true;

    if (parentNode.expanded) {
      renderTreeInfo('loading children for item ' + prefix);
      setTimeout(() => {
        parentNode.loading = false;
        renderTreeInfo('Finished loading children for item ' + prefix);
        const items: any[] = [];
        for (let i=0; i<args.nodes; i++) {
          items.push(lazyAsyncNode(args));
        }
        render(html`${prefix} ${items}`, parentNode);
        updateChildren(parentNode);
      }, 0);
    } else {
      parentNode.loading = false;
      render(html`${prefix}`, parentNode);
    }
  }
  function updateBasedOnChildren(node: any) {
    if (node && node.tagName === 'CDS-TREE-ITEM') {
      let oneSelected = false;
      let oneUnselected = false;

      node.indeterminate = false;

      Array.from(node.children).forEach((c: any) => {
        if (c.indeterminate) {
          node.indeterminate = true;
        }
        if (c.selected) {
          oneSelected = true;
          if (oneUnselected) {
            node.indeterminate = true;
          }
        }
        if (!c.selected) {
          oneUnselected = true;
          if (oneSelected) {
            node.indeterminate = true;
          }
        }
      });

      if (!oneSelected) {
        node.selected = false;
      } else if (!oneUnselected) {
        node.selected = true;
      } else {
        node.selected = false;
      }

      updateBasedOnChildren(node.parentNode);
    }
  }

  function updateChildren(node: any) {
    Array.from(node.children).forEach((c: any) => {
      c.indeterminate = false;
      c.selected = node.selected;
      updateChildren(c);
    });
  }

  const onSelectedChange = {
    // handleEvent method is required.
    handleEvent(e: any) {
      const currentNode = e.target as any;
      currentNode.selected = e.detail;
      currentNode.indeterminate = false;

      // update children's selected/indeterminate state
      updateChildren(currentNode);

      // update ancestors' selected/indeterminate state
      updateBasedOnChildren(currentNode.parentNode);
    },
    // event listener objects can also define zero or more of the event
    // listener options: capture, passive, and once.
    capture: true,
  };

  return html`
      <cds-tree-item multi-select expandable @expandedChange="${(e: any) => onExpandedChange(e, 'async node')}"  @selectedChange="${onSelectedChange}">
        async node
      </cds-tree-item>
`;
}
