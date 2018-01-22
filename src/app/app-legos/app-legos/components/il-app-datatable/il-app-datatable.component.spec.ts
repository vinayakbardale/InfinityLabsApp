import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlAppDatatableComponent } from './il-app-datatable.component';

describe('IlAppDatatableComponent', () => {
  let component: IlAppDatatableComponent;
  let fixture: ComponentFixture<IlAppDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlAppDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlAppDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
