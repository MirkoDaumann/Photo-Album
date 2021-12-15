import { Geolocation } from "./geolocation";

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geolocation;
}
