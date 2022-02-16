import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatCardModule } from "@angular/material/card";
import { RouterTestingModule } from "@angular/router/testing";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { UserOverviewComponent } from './user-overview.component';

describe('UserOverviewComponent', () => {
  let component: UserOverviewComponent;
  let fixture: ComponentFixture<UserOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOverviewComponent],
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        RouterTestingModule,
        MatTableModule,
        MatCheckboxModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
