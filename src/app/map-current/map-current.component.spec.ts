import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCurrentComponent } from './map-current.component';

describe('MapCurrentComponent', () => {
  let component: MapCurrentComponent;
  let fixture: ComponentFixture<MapCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
