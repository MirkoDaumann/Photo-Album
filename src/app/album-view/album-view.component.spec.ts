import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { MatCardModule } from "@angular/material/card";
import { BehaviorSubject, of } from "rxjs";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

import { AlbumViewComponent } from './album-view.component';
import { ViewButtonBarModule } from "../../shared/components/view-button-bar/view-button-bar.module";
import { UserDataService } from "../../shared/services/user-data.service";
import { UserOverviewData } from "../../shared/interfaces/user-overview-data";
import { AlbumViewService } from "./album-view.service";
import { PhotoAlbum } from "../../shared/interfaces/photo-album";

describe('AlbumViewComponent', () => {
  let component: AlbumViewComponent;
  let fixture: ComponentFixture<AlbumViewComponent>;
  let userDataService: UserDataService;
  let router: Router;

  const selectedTableRow: UserOverviewData[] = [{
    id: 3,
    name: 'Test Name',
    address: {
      suite: "6",
      geo: { lng: "123", lat: "456" },
      street: "some Street",
      zipcode: "some Code",
      city: "some City"
    }
  }];

  const photoAlbums: PhotoAlbum[] = [{
    userId: 3,
    id: 4,
    title: "some Album Title"
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AlbumViewComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatCardModule,
        ViewButtonBarModule,
        FormsModule,
      ],
      providers: [
        {
          provide: UserDataService, useValue: {
            getSelectedTableRows$: jest.fn(() => of(selectedTableRow)),
          }
        },
        {
          provide: AlbumViewService, useValue: {
            getPhotoAlbums: jest.fn(() => of(photoAlbums)),
          }
        }
      ]
    }).compileComponents();

  });

  beforeEach(() => {
    userDataService = TestBed.inject(UserDataService);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(AlbumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* In my Unittests i give every function its own describe with the it/test below testing different parts of the functionality.
  *  For this there is a happy path, which is also needed to run the whole rest of the test. So i provide a global jest mock of the return value.
  *  That means in the NgOnInit function i can test if the photoAlbum was correctly filled.
  *  For the negativ path, which doesnt trigger, because of the global mock, i override the global mock with a jest spy to return an empty BehaviorSubject.
  *  Then i mock the AngularRouter and spy on it to.
  *  In the end i just want to know if the navigate function was triggered. So a counter expect is enough.
  *  Coverage shows, that both paths have been taken.
  *  */
  describe('NgOnInit()', () => {
    it('should navigate if no selectedRow was found', () => {
      jest.spyOn(userDataService, 'getSelectedTableRows$').mockReturnValueOnce(new BehaviorSubject([] as UserOverviewData[]));
      const routerSpy = jest.spyOn(router, 'navigate').mockReturnValueOnce(new Promise(() => true));

      component.ngOnInit();

      expect(routerSpy).toHaveBeenCalledTimes(1);
    });

    it('should fill photoAlbums, if a row was selected', () => {
      component.ngOnInit();

      expect(component.photoAlbums).toMatchObject([{
        "albums": [{ "id": 4, "title": "some Album Title", "userId": 3 }],
        "name": "Test Name",
        "userId": 3
      }]);
    });
  });
});
