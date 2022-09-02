import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypefillComponent } from './typefill.component';

describe('TypefillComponent', () => {
  let component: TypefillComponent;
  let fixture: ComponentFixture<TypefillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypefillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
