import {TestBed, waitForAsync} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {AlbumViewService} from "./album-view.service";
import {PhotoAlbum} from "../../shared/interfaces/photo-album";

describe("AlbumViewServiceTest", () => {
  let httpMock: HttpTestingController;
  let albumViewService: AlbumViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumViewService],
    });

    httpMock = TestBed.inject(HttpTestingController);
    albumViewService = TestBed.inject(AlbumViewService);
  });

  afterEach(() => {
    httpMock.verify();
    TestBed.resetTestingModule();
  });

  describe("getPhotoAlbum", () => {
    test("should return a PhotoAlbum Array", waitForAsync(() => {
      const photoAlbums = [{userId: 3, id: 5, title: "someTitle"}];
      albumViewService.getPhotoAlbums().subscribe((photoAlbum: PhotoAlbum[]) => {
        expect(photoAlbum).toHaveLength(1);
      });

      const req = httpMock.expectOne("https://jsonplaceholder.typicode.com/albums");

      expect(req.request.method).toEqual("GET");
      req.flush(photoAlbums);
    }));
  });

  describe("createPhotoAlbum", () => {
    test("should update a Photoalbum", waitForAsync(() => {
      const photoAlbums = [{userId: 3, id: 5, title: "someTitle"}];
      albumViewService.createPhotoAlbum(3, "Test").subscribe((photoAlbum: PhotoAlbum[]) => {
        expect(photoAlbum).toHaveLength(1);
      });

      const req = httpMock.expectOne("https://jsonplaceholder.typicode.com/albums");

      expect(req.request.method).toEqual("POST");
      req.flush(photoAlbums);
    }));
  });
})
