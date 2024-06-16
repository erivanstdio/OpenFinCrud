import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalCompanyFormComponent } from './external-company-form.component';

describe('ExternalCompanyFormComponent', () => {
  let component: ExternalCompanyFormComponent;
  let fixture: ComponentFixture<ExternalCompanyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalCompanyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalCompanyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
