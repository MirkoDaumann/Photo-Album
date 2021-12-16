import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";
import { PhotoMetadata } from "../../shared/interfaces/photo-metadata";

@Injectable({ providedIn: "root" })
export class PhotoViewService {
  public baseUrl: string = environment.baseUrl;

  constructor(private readonly httpClient: HttpClient) {
  }

  public getPhotos(): Observable<PhotoMetadata[]> {
    return this.httpClient.get(`${this.baseUrl}/photos`) as Observable<PhotoMetadata[]>;
  }
}
