import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErorrCheckingComponent } from './erorr-checking.component';

describe('ErorrCheckingComponent', () => {
  let component: ErorrCheckingComponent;
  let fixture: ComponentFixture<ErorrCheckingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErorrCheckingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErorrCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
