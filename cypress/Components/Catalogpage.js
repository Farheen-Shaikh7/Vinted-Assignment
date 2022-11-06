export const brandDropdown = () => cy.get('[data-testid="catalog--brand-filter--trigger"]');
export const brandDropdownSearchInput = () => cy.get('#brand_keyword');
export const filterLabel = () => cy.get('[data-testid="catalog--selected-filter-brandIds-53"]');
export const filterLabelBar = () => cy.get('.u-align-items-center');
export const brandDropdownOverflowAuto = () => cy.get('.u-overflow-auto');
export const itemDetailsBox = () => cy.get('.ItemBox_details__w4FJ7');

export const sortByDropdown = () => cy.get('[data-testid="filter-dropdown--trigger"] > .Button_content__LIGxa > .Button_label__md78- > span');
export const priceHighToLowOption = () => cy.get('#sort_by-list-item-price_high_to_low');
export const pricelabel = () => cy.get('.ItemBox_title-content__DiLOY h3');
export const priceDropdown = () => cy.get('[data-testid="catalog--price-filter--trigger"]');
export const fromPriceInput = () => cy.get('#price_from');
export const toPriceInput = () => cy.get('#price_to');

export const selectedFilterPriceFrom = () => cy.get('[data-testid="catalog--selected-filter-priceFrom-20"]');
export const selectedFilterPriceTo = () =>cy.get('[data-testid="catalog--selected-filter-priceTo-50"]');

export const catalogFilter = () => cy.get('[data-testid="catalog--catalog-filter--trigger"]');
export const catalogDropdown =() =>  cy.get('[data-testid="dropdown-content"]');
export const catalogListItemWomen = () => cy.get('#catalog_ids-list-item-1904');
export const catalogListItemShoes = () =>cy.get('#catalog_ids-list-item-16');
export const catalogListItemHeels = () => cy.get('#catalog_ids-list-item-543');
export const catalogListItemHighHeelsCheckBox = () =>cy.get('#catalog_ids-list-item-1046');
export const feedGridItem = () =>cy.get('.feed-grid__item');
