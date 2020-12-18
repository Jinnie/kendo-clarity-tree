import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';

export const TREE_NODES = new InjectionToken<string>('1000');

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {

  constructor(@Inject(TREE_NODES) private count: string) {}

  getItems(node?): Observable<any[]> { 
    const items = [];
    for (let i = 1; i <= Number.parseInt(this.count); i++) {
      const id = (node) ? `${node.id}${i}` : i;
        items.push({text: "Item " + i, expanded: false, id, isFolder: true, selected: false});
    }
    return of(items);
  }
}
