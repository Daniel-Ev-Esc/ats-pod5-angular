import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePostcardComponent } from './delete-postcard.component';

describe('DeletePostcardComponent', () => {
  let component: DeletePostcardComponent;
  let fixture: ComponentFixture<DeletePostcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePostcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePostcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
