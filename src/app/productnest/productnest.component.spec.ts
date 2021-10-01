import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductnestComponent } from './productnest.component';

describe('ProductnestComponent', () => {
  let component: ProductnestComponent;
  let fixture: ComponentFixture<ProductnestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductnestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductnestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
