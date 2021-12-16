import { UserAddressPipe } from "./user-address.pipe";
import { Address } from "../interfaces/address";

describe("UserAddressPipe", () => {
  it("create an instance", () => {
    const pipe = new UserAddressPipe();
    expect(pipe).toBeTruthy();
  });

  describe("transform()", () => {
    it("should transform correct if all values are there", () => {
      const address: Address = {
        city: "Magdeburg",
        zipcode: "39106",
        street: "Uniplatz 15",
        suite: "7",
        geo: { lat: "123", lng: "345" }
      };

      const pipe = new UserAddressPipe();

      const result = pipe.transform(address);

      expect(result).toEqual("Uniplatz 15 39106 Magdeburg App: 7");
    });

    it("should still return a String if City and zipcode are missing", () => {
      const address: any = {
        street: "Uniplatz 15",
        suite: "7",
        geo: { lat: "123", lng: "345" }
      };

      const pipe = new UserAddressPipe();

      const result = pipe.transform(address);

      expect(result).toEqual("Uniplatz 15   App: 7");
    });

    it("should return an empty string if input is empty", () => {
      const address: any = {}

      const pipe = new UserAddressPipe();

      const result = pipe.transform(address);

      expect(result).toEqual("");
    })
  })
})
