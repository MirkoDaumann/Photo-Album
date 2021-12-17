declare namespace Cypress {
  interface Chainable {
    clickButton(buttonName: string): void;
    urlContains(url: string): void;
  }
}
