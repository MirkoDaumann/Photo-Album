describe('/users', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  it('/should return an Array of Objects with Propertys', () => {
    cy.request(`${ baseUrl }/users`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0]).to.have.property('name');
      expect(response.body[0]).to.have.property('id');
      expect(response.body[0]).to.have.property('address');
    });
  });
});
