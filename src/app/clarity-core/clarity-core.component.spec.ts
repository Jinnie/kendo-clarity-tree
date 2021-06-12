import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ClrTreeViewModule } from '@clr/angular';
import { TreeDataService, TREE_NODES } from '../tree-data.service';

import { ClarityCoreComponent } from './clarity-core.component';
import '@cds/core/tree-view/register';

describe('ClarityCoreComponent 1000', () => {
  let component: ClarityCoreComponent;
  let fixture: ComponentFixture<ClarityCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ClrTreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '1000' } ],
      declarations: [ ClarityCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityCoreComponent);
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

describe('ClarityCoreTree 3000', () => {
  let component: ClarityCoreComponent;
  let fixture: ComponentFixture<ClarityCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ClrTreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '3000' } ],
      declarations: [ ClarityCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityCoreComponent);
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

describe('ClarityCoreTree 5000', () => {
  let component: ClarityCoreComponent;
  let fixture: ComponentFixture<ClarityCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ClrTreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '5000' } ],
      declarations: [ ClarityCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityCoreComponent);
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

describe('ClarityCoreTree 10000', () => {
  let component: ClarityCoreComponent;
  let fixture: ComponentFixture<ClarityCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ClrTreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '10000' } ],
      declarations: [ ClarityCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityCoreComponent);
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