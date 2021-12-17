import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MatCardModule } from "@angular/material/card";

import { PhotoViewComponent } from './photo-view.component';
import { ViewButtonBarModule } from "../../shared/components/view-button-bar/view-button-bar.module";

describe('PhotoViewComponent', () => {
  let component: PhotoViewComponent;
  let fixture: ComponentFixture<PhotoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PhotoViewComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatCardModule,
        ViewButtonBarModule,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
