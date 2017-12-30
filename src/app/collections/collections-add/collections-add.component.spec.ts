import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsAddComponent } from './collections-add.component';

describe('CollectionsAddComponent', () => {
  let component: CollectionsAddComponent;
  let fixture: ComponentFixture<CollectionsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
