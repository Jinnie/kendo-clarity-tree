/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

// import { ClrIconModule } from '../../icon/icon.module';
import { ClrLoadingModule } from '@clr/angular';
import { CniTreeNode } from './tree-node';
import { CniTree } from './tree';
import { CniRecursiveForOf } from './recursive-for-of';
import { CniRecursiveChildren } from './recursive-children';
import { CniTreeNodeLink } from './tree-node-link';
// import { angleIcon, ClarityIcons } from '@cds/core/icon';

export const CLR_TREE_VIEW_DIRECTIVES: Type<any>[] = [CniTree, CniTreeNode, CniRecursiveForOf, CniTreeNodeLink];

@NgModule({
  imports: [CommonModule, ClrLoadingModule],
  declarations: [CLR_TREE_VIEW_DIRECTIVES, CniRecursiveChildren],
  exports: [CLR_TREE_VIEW_DIRECTIVES],
})
export class NoIconTreeViewModule {
  constructor() {
    // ClarityIcons.addIcons(angleIcon);
  }
}
