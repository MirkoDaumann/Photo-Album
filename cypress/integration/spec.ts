describe('Data', () => {
  it('Table should fill in the Data', () => {
    cy.get('.mat-table').find('.mat-column-Address');
    cy.get('.mat-table').find('.mat-column-Name');

    cy.get('tbody').find('.mat-column-Address');
    cy.get('tbody').find('.mat-column-Name');
  });
});

describe('Routing', () => {
  it('should be able to navigate through the application', () => {
    cy.get('tbody').find('tr').within(($body) => {
      cy.get('td').first().click();
    });

    cy.clickButton('View Photo-Album');
    cy.urlContains('/albumView');

    cy.clickButton('Reload');
    cy.urlContains('/albumView');

    cy.clickButton('keyboard_backspace');
    cy.urlContains('/userOverview');

    cy.get('tbody').find('tr').within(($body) => {
      cy.get('td').first().click();
    });

    cy.clickButton('View Photo-Album');
    cy.get('mat-card').find(".album-card-wrapper").first().click();

    cy.urlContains('/photoView');
    cy.clickButton('Reload');
    cy.urlContains('/photoView');

    cy.clickButton('keyboard_backspace');
    cy.urlContains('/albumView');

    cy.reload();
    cy.urlContains('/userOverview');
  });
});
