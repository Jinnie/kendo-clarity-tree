/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ChangeDetectorRef, Directive, Input, OnChanges, OnDestroy, TemplateRef } from '@angular/core';
import { CniTreeFeaturesService } from './tree-features.service';
import { RecursiveTreeNodeModel } from './models/recursive-tree-node.model';
import { TreeNodeModel } from './models/tree-node.model';
import { AsyncArray } from './models/async-array';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export interface ClrRecursiveForOfContext<T> {
  $implicit: T;
  clrModel: TreeNodeModel<T>;
}

@Directive({ selector: '[cniRecursiveFor][cniRecursiveForOf]' })
export class CniRecursiveForOf<T> implements OnChanges, OnDestroy {
  constructor(
    private template: TemplateRef<ClrRecursiveForOfContext<T>>,
    private featuresService: CniTreeFeaturesService<T>,
    private cdr: ChangeDetectorRef
  ) {}

  // TODO: accept NgIterable<T>
  @Input('cniRecursiveForOf') nodes: T | T[];

  // TODO: accept NgIterable<T> return type
  @Input('cniRecursiveForGetChildren') getChildren: (node: T) => AsyncArray<T>;

  private childrenFetchSubscription: Subscription;

  // I'm using OnChanges instead of OnInit to easily keep up to date with dynamic trees. Maybe optimizable later.
  ngOnChanges() {
    let wrapped: RecursiveTreeNodeModel<T>[];
    if (Array.isArray(this.nodes)) {
      wrapped = this.nodes.map(node => new RecursiveTreeNodeModel(node, null, this.getChildren, this.featuresService));
    } else {
      wrapped = [new RecursiveTreeNodeModel(this.nodes, null, this.getChildren, this.featuresService)];
    }
    if (!this.childrenFetchSubscription) {
      this.childrenFetchSubscription = this.featuresService.childrenFetched.pipe(debounceTime(0)).subscribe(() => {
        this.cdr.detectChanges();
      });
    }

    this.featuresService.recursion = {
      template: this.template,
      root: wrapped,
    };
  }

  ngOnDestroy() {
    if (this.childrenFetchSubscription) {
      this.childrenFetchSubscription.unsubscribe();
    }
  }
}
