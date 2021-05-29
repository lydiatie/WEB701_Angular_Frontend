import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTokenComponent } from './get-token.component';

describe('GetTokenComponent', () => {
  let component: GetTokenComponent;
  let fixture: ComponentFixture<GetTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
