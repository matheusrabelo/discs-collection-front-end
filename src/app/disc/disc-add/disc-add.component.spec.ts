import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscAddComponent } from './disc-add.component';

describe('DiscAddComponent', () => {
  let component: DiscAddComponent;
  let fixture: ComponentFixture<DiscAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
