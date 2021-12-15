import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { environment } from "../environments/environment";
import { UserData } from "../interfaces/user-data";
import { UserOverviewData } from "../interfaces/user-overview-data";

@Injectable({ providedIn: 'root' })
export class UserService {

  private baseUrl = environment.baseUrl;

  constructor(private readonly httpClient: HttpClient) {
  }

  public getUsers(): Observable<UserOverviewData[]> {
    return this.httpClient.get(`${ this.baseUrl }/users`).pipe(map((apiData: any) => {
      const userOverviewData: UserOverviewData[] = [];

      apiData.forEach((userData: UserData) => {
        userOverviewData.push({ name: userData.name, address: userData.address })
      });

      return userOverviewData;
    }))
  }
}
