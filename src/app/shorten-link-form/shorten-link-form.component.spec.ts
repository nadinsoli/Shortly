import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenLinkFormComponent } from './shorten-link-form.component';

describe('ShortenLinkFormComponent', () => {
  let component: ShortenLinkFormComponent;
  let fixture: ComponentFixture<ShortenLinkFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortenLinkFormComponent]
    });
    fixture = TestBed.createComponent(ShortenLinkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
