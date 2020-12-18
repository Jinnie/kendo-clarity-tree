import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { ClarityDndTreeComponent } from './clarity-dnd-tree/clarity-dnd-tree.component';
import { ClarityNoIconsComponent } from './clarity-no-icons/clarity-no-icons.component';
import { ClarityTreeComponent } from './clarity-tree/clarity-tree.component';
import { CustomTreeComponent } from './custom-tree/custom-tree.component';
import { KendoTreeComponent } from './kendo-tree/kendo-tree.component';


const routes: Routes = [
  { path: 'clarity', component: ClarityTreeComponent },
  { path: 'kendo', component: KendoTreeComponent },
  { path: 'custom', component: CustomTreeComponent },
  { path: 'clarity-dnd', component: ClarityDndTreeComponent },
  { path: 'clarity-no-icons', component: ClarityNoIconsComponent },
  { path: 'chart', component: ChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
