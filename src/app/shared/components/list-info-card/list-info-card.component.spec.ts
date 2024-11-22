import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInfoCardComponent } from './list-info-card.component';

describe('ListInfoCardComponent', () => {
  let component: ListInfoCardComponent;
  let fixture: ComponentFixture<ListInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
