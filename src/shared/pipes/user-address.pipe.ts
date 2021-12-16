import { Pipe, PipeTransform } from "@angular/core";
import { Address } from "../interfaces/address";

@Pipe({ name: 'userAddress' })
export class UserAddressPipe implements PipeTransform {

  transform(address: Address): string {
    return `${ address.street ?? "" } ${ address.zipcode ?? "" } ${ address.city ?? "" } ${ address.suite ? "App: " + address.suite : "" }`.trim();
  }
}
