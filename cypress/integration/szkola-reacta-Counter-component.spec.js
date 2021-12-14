const COUNTER = {
  INIT_VALUE: 0,
  TEST_VALUE: 5, 
  RESULT: '.counter__result',
  BUTTON: {
    INCREASE: '.counter__increase',
    DECREASE: '.counter__decrease',
    SET: '.counter__set',
    RESET: '.counter__reset'
  },
  INPUT: '.counter__input'
}

describe('Counter component', () => {
  it('should render successful', () => {
    cy.visit('/modul8');
  });
  it('should have increase and decrease buttons', () => {
    cy.get(COUNTER.BUTTON.INCREASE).should('exist');
    cy.get(COUNTER.BUTTON.DECREASE).should('exist');
  })
  it('should increase counter value', () => {
    const button = cy.get(COUNTER.BUTTON.INCREASE);
    button.click();
    cy.get(COUNTER.RESULT).contains((COUNTER.INIT_VALUE + 1).toString());
  });
  it('should decrease counter value', () => {
    const button = cy.get(COUNTER.BUTTON.DECREASE);
    button.click();
    cy.get(COUNTER.RESULT).contains(COUNTER.INIT_VALUE.toString());
  });
  it('should set counter value after click set button', () => {
    cy.get(COUNTER.INPUT).type(COUNTER.TEST_VALUE);
    cy.get(COUNTER.BUTTON.SET).click();
    cy.get(COUNTER.RESULT).contains(COUNTER.TEST_VALUE.toString());
  });
  it('should reset counter value after click reset button', () => {
    cy.get(COUNTER.BUTTON.RESET).click();
    cy.get(COUNTER.RESULT).contains(COUNTER.INIT_VALUE);
  });
})