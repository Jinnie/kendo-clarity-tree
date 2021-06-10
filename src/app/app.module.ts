import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { KendoTreeComponent } from './kendo-tree/kendo-tree.component';
import { ClarityTreeComponent } from './clarity-tree/clarity-tree.component';
import { TreeDataService, TREE_NODES } from './tree-data.service';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartComponent } from './chart/chart.component';
import { CustomTreeComponent } from './custom-tree/custom-tree.component';
import { ClarityDndTreeComponent } from './clarity-dnd-tree/clarity-dnd-tree.component';
import { ClarityNoIconsComponent } from './clarity-no-icons/clarity-no-icons.component';
import { NoIconTreeViewModule } from './clarity-no-icons/tree-view';
import { ClarityCoreMultiComponent } from './clarity-core-multi/clarity-core-multi.component';
import { ClarityCoreNgComponent, LazyAsyncNode } from './clarity-core-ng/clarity-core-ng.component';
import { ClarityCoreComponent } from './clarity-core/clarity-core.component';
import { CdsModule } from '@cds/angular';


@NgModule({
  declarations: [
    AppComponent,
    KendoTreeComponent,
    ClarityTreeComponent,
    ChartComponent,
    CustomTreeComponent,
    ClarityCoreNgComponent,
    ClarityCoreComponent,
    ClarityCoreMultiComponent,
    ClarityDndTreeComponent,
    ClarityNoIconsComponent,
    LazyAsyncNode
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    TreeViewModule,
    HighchartsChartModule,
    HttpClientModule,
    FormsModule,
    NoIconTreeViewModule,
    // ClarityCoreModule,
    CdsModule,
  ],
  providers: [TreeDataService, { provide: TREE_NODES, useValue: '1000'} ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
