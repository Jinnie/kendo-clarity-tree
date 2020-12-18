import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeDataService } from '../tree-data.service';

@Component({
  selector: 'app-custom-tree',
  templateUrl: './custom-tree.component.html',
  styleUrls: ['./custom-tree.component.scss']
})
export class CustomTreeComponent {

  data = this.service.getItems();
  expand = false;

  constructor(private service: TreeDataService) {
    // setTimeout(() => {
    //   this.expand = true;
    // }, 5000);
  }

  fetchChildren = (node: any): Observable<any[]> => this.service.getItems(node);

  hasChildren = (node: any): boolean => true;

}
