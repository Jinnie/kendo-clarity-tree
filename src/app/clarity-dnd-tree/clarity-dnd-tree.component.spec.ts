import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ClrIconModule, ClrTreeViewModule } from '@clr/angular';
import { TreeDataService, TREE_NODES } from '../tree-data.service';

import { ClarityDndTreeComponent } from './clarity-dnd-tree.component';

describe('ClarityDndTreeComponent 1000', () => {
  let component: ClarityDndTreeComponent;
  let fixture: ComponentFixture<ClarityDndTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ClrTreeViewModule, ClrIconModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '1000' } ],
      declarations: [ ClarityDndTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityDndTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be created and expand', () => {
    component.expand = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

describe('ClarityDndTreeComponent 3000', () => {
  let component: ClarityDndTreeComponent;
  let fixture: ComponentFixture<ClarityDndTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ClrTreeViewModule, ClrIconModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '3000' } ],
      declarations: [ ClarityDndTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityDndTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be created and expand', () => {
    component.expand = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

describe('ClarityDndTreeComponent 5000', () => {
  let component: ClarityDndTreeComponent;
  let fixture: ComponentFixture<ClarityDndTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ClrTreeViewModule, ClrIconModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '5000' } ],
      declarations: [ ClarityDndTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityDndTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be created and expand', () => {
    component.expand = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

describe('ClarityDndTreeComponent 10000', () => {
  let component: ClarityDndTreeComponent;
  let fixture: ComponentFixture<ClarityDndTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ClrTreeViewModule, ClrIconModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '10000' } ],
      declarations: [ ClarityDndTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityDndTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be created and expand', () => {
    component.expand = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});