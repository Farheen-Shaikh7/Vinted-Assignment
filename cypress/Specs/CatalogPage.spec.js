import * as Utils from '../utils';
import * as CatalogPage from '../Components/Catalogpage';

describe('CatalogPage', () => {

  beforeEach(() => {
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
    Cypress.on('uncaught:exception', (err) => {
      /* returning false here prevents Cypress from failing the test */
      if (resizeObserverLoopErrRe.test(err.message)) {
        return false
      }
    });
    cy.visit('catalog');
    Utils.cookieSetup();
  })

  it('Testcase:1 Able to filter with brand name ', () => {
    CatalogPage.brandDropdown().click();
    CatalogPage.brandDropdownSearchInput().type('Ni');
    cy.get('li').filter(':contains("Nike")').click();
    CatalogPage.brandDropdown().click();
    CatalogPage.filterLabel().should('be.visible'); 
    CatalogPage.filterLabelBar().should('contain.text', 'Nike');
    CatalogPage.itemDetailsBox().should('contain.text', 'Nike');
  })

  it('Testcase:3 Able to check items within the result page adhere to the given price ranges ', () => {
    CatalogPage.priceDropdown().click();
    CatalogPage.fromPriceInput().type('20');
    CatalogPage.toPriceInput().type('50{enter}');
    CatalogPage.priceDropdown().click();
    CatalogPage.selectedFilterPriceFrom().should('be.visible');
    CatalogPage.selectedFilterPriceTo().should('be.visible');
    CatalogPage.filterLabelBar().should('contain.text', '20');
    CatalogPage.filterLabelBar().should('contain.text', '50');
    cy.wait(3000); // Adding wait for page to load filtered results
    CatalogPage.pricelabel().then(($prices) => {
      const innerText = (el) => el.innerText;
      const justDigits = (str) => str.replace(/[^0-9.,]/g, '');
      const prices = Cypress._.map($prices, (el) =>
        parseFloat(justDigits(innerText(el))),
      )
      prices.forEach((price) => {
        expect(price).to.be.within(20, 50);
      })
    });
  });

  it('Testcase:4 Able to filter with brand name ', () => {
    CatalogPage.brandDropdown().click();
    CatalogPage.brandDropdownSearchInput().type('Nik');
    CatalogPage.brandDropdownOverflowAuto().should('contain.text', 'Nik');
  });

  it('Testcase:5 Able to check selected item from the list is from the selected category ', () => {
    CatalogPage.catalogFilter().click();
    CatalogPage.catalogListItemWomen().click();
    CatalogPage.catalogListItemShoes().click();
    CatalogPage.catalogListItemHeels().click();
    CatalogPage.catalogListItemHighHeelsCheckBox().click();
    CatalogPage.catalogFilter().click();
    cy.wait(3000); // Adding wait for page to load filtered results
    CatalogPage.feedGridItem().first().click();
    cy.url().should('contain', 'high-heels');
  });
});
