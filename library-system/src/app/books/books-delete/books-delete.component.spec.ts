import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDeleteComponent } from './books-delete.component';

describe('BooksDeleteComponent', () => {
  let component: BooksDeleteComponent;
  let fixture: ComponentFixture<BooksDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
