import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideShowComponent } from './hide-show.component';

describe('HideShowComponent', () => {
  let component: HideShowComponent;
  let fixture: ComponentFixture<HideShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HideShowComponent]
});
    fixture = TestBed.createComponent(HideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
