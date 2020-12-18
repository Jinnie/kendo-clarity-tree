/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, Optional, SkipSelf, TemplateRef } from '@angular/core';
import { RecursiveTreeNodeModel } from './models/recursive-tree-node.model';
import { ClrRecursiveForOfContext } from './recursive-for-of';
import { Subject } from 'rxjs';

@Injectable()
export class CniTreeFeaturesService<T> {
  selectable = false;
  eager = true;
  recursion: {
    template: TemplateRef<ClrRecursiveForOfContext<T>>;
    root: RecursiveTreeNodeModel<T>[];
  };
  childrenFetched: Subject<void> = new Subject();
}

export function treeFeaturesFactory<T>(existing: CniTreeFeaturesService<T>) {
  return existing || new CniTreeFeaturesService();
}

export const CNI_TREE_FEATURES_PROVIDER = {
  provide: CniTreeFeaturesService,
  useFactory: treeFeaturesFactory,
  /*
   * The Optional + SkipSelf pattern ensures that in case of nested components, only the root one will
   * instantiate a new service and all its children will reuse the root's instance.
   * If there are several roots (in this case, several independent trees on a page), each root will instantiate
   * its own service so they won't interfere with one another.
   *
   * TL;DR - Optional + SkipSelf = 1 instance of CniTreeFeaturesService per tree.
   */
  deps: [[new Optional(), new SkipSelf(), CniTreeFeaturesService]],
};
