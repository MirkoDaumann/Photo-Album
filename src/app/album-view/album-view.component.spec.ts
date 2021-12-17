import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MatCardModule } from "@angular/material/card";

import { AlbumViewComponent } from './album-view.component';
import { ViewButtonBarModule } from "../../shared/components/view-button-bar/view-button-bar.module";

describe('AlbumViewComponent', () => {
  let component: AlbumViewComponent;
  let fixture: ComponentFixture<AlbumViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumViewComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatCardModule,
        ViewButtonBarModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
