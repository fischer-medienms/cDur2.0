import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagGroupPage } from './tag-group.page';

describe('TagGroupPage', () => {
  let component: TagGroupPage;
  let fixture: ComponentFixture<TagGroupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TagGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
