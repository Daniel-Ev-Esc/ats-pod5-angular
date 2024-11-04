import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostcardComponent } from './edit-postcard.component';

describe('EditPostcardComponent', () => {
  let component: EditPostcardComponent;
  let fixture: ComponentFixture<EditPostcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPostcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPostcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
