import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSection2Component } from './producto-section2.component';

describe('ProductoSection2Component', () => {
  let component: ProductoSection2Component;
  let fixture: ComponentFixture<ProductoSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoSection2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
