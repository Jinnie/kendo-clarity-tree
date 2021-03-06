import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { ClarityDndTreeComponent } from './clarity-dnd-tree/clarity-dnd-tree.component';
import { ClarityNoIconsComponent } from './clarity-no-icons/clarity-no-icons.component';
import { ClarityTreeComponent } from './clarity-tree/clarity-tree.component';
import { ClarityCoreComponent } from './clarity-core/clarity-core.component';
import { CustomTreeComponent } from './custom-tree/custom-tree.component';
import { KendoTreeComponent } from './kendo-tree/kendo-tree.component';
import { ClarityCoreMultiComponent } from './clarity-core-multi/clarity-core-multi.component';
import { ClarityCoreNgComponent } from './clarity-core-ng/clarity-core-ng.component';


const routes: Routes = [
  { path: 'clarity', component: ClarityTreeComponent },
  { path: 'kendo', component: KendoTreeComponent },
  { path: 'custom', component: CustomTreeComponent },
  { path: 'clarity-dnd', component: ClarityDndTreeComponent },
  { path: 'clarity-no-icons', component: ClarityNoIconsComponent },
  { path: 'clarity-core', component: ClarityCoreComponent },
  { path: 'clarity-core-ng', component: ClarityCoreNgComponent },
  { path: 'clarity-core-multi', component: ClarityCoreMultiComponent },
  { path: 'chart', component: ChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
