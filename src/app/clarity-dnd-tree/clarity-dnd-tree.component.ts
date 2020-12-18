import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeDataService } from '../tree-data.service';

@Component({
  selector: 'app-clarity-dnd-tree',
  templateUrl: './clarity-dnd-tree.component.html',
  styleUrls: ['./clarity-dnd-tree.component.css'],
})
export class ClarityDndTreeComponent {

  data = this.service.getItems();
  expand = false;

  constructor(private service: TreeDataService) {
    // setTimeout(() => {
    //   this.expand = true;
    // }, 5000);
  }

  fetchChildren = (node: any): Observable<any[]> => this.service.getItems(node);

  hasChildren = (node: any): boolean => true;

  selectedNode: any;
  onClick(file: any) {
    if (this.selectedNode) {
      this.selectedNode.selected = false;
    }
    file.selected = true;
    this.selectedNode = file;
  }

  onDragStart(): void {}
  onDragMove(droppableEl: HTMLElement): void {}
  onDragEnd(event: any): void {}
  onDroppableDragEnter(event: any, dropNode: any): void {}
  onDrop(event: any, dropNode: any): void {}

  onStateChange(file: any) {}

}
