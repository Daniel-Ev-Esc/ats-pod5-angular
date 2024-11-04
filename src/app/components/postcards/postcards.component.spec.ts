import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon'
import { PostcardsComponent } from './postcards.component';

describe('PostcardsComponent', () => {
  let component: PostcardsComponent;
  let fixture: ComponentFixture<PostcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostcardsComponent,MatIconModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
