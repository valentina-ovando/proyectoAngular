import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSection1Component } from './producto-section1.component';

describe('ProductoSection1Component', () => {
  let component: ProductoSection1Component;
  let fixture: ComponentFixture<ProductoSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoSection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
