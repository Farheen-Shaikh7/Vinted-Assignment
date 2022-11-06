export const cookieAcceptbtn = () => cy.get('#onetrust-accept-btn-handler');
export const countryPopUpCloseButton = () =>  cy.get('.Navigation_right__R6Rcm > .Button_button__OXp3w');

export function cookieSetup() {
  cy.setCookie('test_cookie', 'CheckForPermission');
  cy.setCookie('domain_selected', 'true');
  countryPopUpCloseButton().click();
  cookieAcceptbtn().click();
}