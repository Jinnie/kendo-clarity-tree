import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TreeDataService, TREE_NODES } from '../tree-data.service';

import { ClarityNoIconsComponent } from './clarity-no-icons.component';
import { NoIconTreeViewModule } from './tree-view';

describe('ClarityNoIconsComponent 1000', () => {
  let component: ClarityNoIconsComponent;
  let fixture: ComponentFixture<ClarityNoIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NoIconTreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '1000' } ],
      declarations: [ ClarityNoIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityNoIconsComponent);
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

describe('ClarityNoIconsComponent 3000', () => {
  let component: ClarityNoIconsComponent;
  let fixture: ComponentFixture<ClarityNoIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NoIconTreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '3000' } ],
      declarations: [ ClarityNoIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityNoIconsComponent);
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

describe('ClarityNoIconsComponent 5000', () => {
  let component: ClarityNoIconsComponent;
  let fixture: ComponentFixture<ClarityNoIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NoIconTreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '5000' } ],
      declarations: [ ClarityNoIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityNoIconsComponent);
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

describe('ClarityNoIconsComponent 10000', () => {
  let component: ClarityNoIconsComponent;
  let fixture: ComponentFixture<ClarityNoIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NoIconTreeViewModule, NoopAnimationsModule ],
      providers: [ TreeDataService, { provide: TREE_NODES, useValue: '10000' } ],
      declarations: [ ClarityNoIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityNoIconsComponent);
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