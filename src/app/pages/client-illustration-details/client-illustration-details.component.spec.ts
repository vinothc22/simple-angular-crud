import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientIllustrationDetailsComponent } from './client-illustration-details.component';

describe('ClientIllustrationDetailsComponent', () => {
  let component: ClientIllustrationDetailsComponent;
  let fixture: ComponentFixture<ClientIllustrationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientIllustrationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientIllustrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
