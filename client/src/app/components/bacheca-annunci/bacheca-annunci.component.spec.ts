import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BachecaAnnunciComponent } from './bacheca-annunci.component';

describe('BachecaAnnunciComponent', () => {
  let component: BachecaAnnunciComponent;
  let fixture: ComponentFixture<BachecaAnnunciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachecaAnnunciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BachecaAnnunciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
