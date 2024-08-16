import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaughtsComponent } from './naughts.component';

describe('NaughtsComponent', () => {
  let component: NaughtsComponent;
  let fixture: ComponentFixture<NaughtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [NaughtsComponent]
});
    fixture = TestBed.createComponent(NaughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
