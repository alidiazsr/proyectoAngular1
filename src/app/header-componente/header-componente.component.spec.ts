import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponenteComponent } from './header-componente.component';

describe('HeaderComponenteComponent', () => {
  let component: HeaderComponenteComponent;
  let fixture: ComponentFixture<HeaderComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
