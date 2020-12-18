import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeDataService } from '../tree-data.service';

@Component({
  selector: 'app-clarity-no-icons',
  templateUrl: './clarity-no-icons.component.html',
  styleUrls: ['./clarity-no-icons.component.css']
})
export class ClarityNoIconsComponent {

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
