import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ClrTreeViewModule } from '@clr/angular';
import { TreeDataService, TREE_NODES } from '../tree-data.service';

import { ClarityCoreMultiComponent } from './clarity-core-multi.component';

describe('ClarityCoreComponent 1000', () => {
  let component: ClarityTreeMultiComponent;
  let fixture: ComponentFixture<ClarityTreeMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ClrTreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '1000' } ],
      declarations: [ ClarityTreeMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityTreeComponent);
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

describe('ClarityTreeComponent 3000', () => {
  let component: ClarityTreeComponent;
  let fixture: ComponentFixture<ClarityTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ClrTreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '3000' } ],
      declarations: [ ClarityTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityTreeComponent);
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

describe('ClarityTreeComponent 5000', () => {
  let component: ClarityTreeComponent;
  let fixture: ComponentFixture<ClarityTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ClrTreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '5000' } ],
      declarations: [ ClarityTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityTreeComponent);
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

describe('ClarityTreeComponent 10000', () => {
  let component: ClarityTreeComponent;
  let fixture: ComponentFixture<ClarityTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ClrTreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '10000' } ],
      declarations: [ ClarityTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityTreeComponent);
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