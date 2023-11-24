import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaptionsPage } from './captions.page';

describe('CaptionsPage', () => {
  let component: CaptionsPage;
  let fixture: ComponentFixture<CaptionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
