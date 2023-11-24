import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSettingsPage } from './list-settings.page';

describe('ListSettingsPage', () => {
  let component: ListSettingsPage;
  let fixture: ComponentFixture<ListSettingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
