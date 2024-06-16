import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalCompaniesListComponent } from './external-companies-list.component';

describe('ExternalCompaniesListComponent', () => {
  let component: ExternalCompaniesListComponent;
  let fixture: ComponentFixture<ExternalCompaniesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalCompaniesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalCompaniesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
