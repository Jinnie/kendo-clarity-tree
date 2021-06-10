import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { TreeDataService, TREE_NODES } from "../tree-data.service";
import { ClarityCoreComponent } from "./clarity-core.component";

@NgModule({
    declarations: [
        ClarityCoreComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [TreeDataService, { provide: TREE_NODES, useValue: '1' }]
})
export class ClarityCoreModule { }