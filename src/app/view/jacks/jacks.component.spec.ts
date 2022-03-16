import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JacksComponent } from './jacks.component';

describe('JacksComponent', () => {
  let component: JacksComponent;
  let fixture: ComponentFixture<JacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
