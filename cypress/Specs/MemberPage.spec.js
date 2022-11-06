import * as Utils from '../utils';
import * as CatalogPage from '../Components/Catalogpage';

describe('MemberPage', () => {

  beforeEach(() => {
    cy.visit('member/64678795');
    Utils.cookieAcceptbtn().click();
  })

  it('Testcase:2 Able to sort item by highest price to the lowest ', () => {
    CatalogPage.sortByDropdown().click();
    CatalogPage.priceHighToLowOption().click();
    cy.wait(3000); // Adding wait for page to load filtered results
    CatalogPage.pricelabel().then(($prices) => {
      const innerText = (el) => el.innerText;
      const justDigits = (str) => str.replace(/[^0-9.,]/g, '');
      const prices = Cypress._.map($prices, (el) =>
        parseFloat(justDigits(innerText(el))),
      )
      // confirm the "prices" array is already sorted
      const sorted = Cypress._.sortBy(prices).reverse(); // desending order
      expect(prices).to.deep.equal(sorted);
    });
  });
});