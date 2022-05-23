// Commonly used methods in Cypress

export class CommonMethods {

    //this method visits any page inserted as parameter
    visitPage(pageURL) {
        cy.visit(pageURL)
    };

    //this method will wait for spinner to dissapear if set to true
    waitWhileSpinnerIsDisplayed(waitForSpinner = false){
        if(waitForSpinner) {
          cy.get('selector spinner').should('be visible');
        };
        cy.get('selector spinner').should('not.exist');
    };

    //this method will hover an element
    hoverElement(webElement) {
        cy.get(webElement).trigger('mouseover');
    };

    //ths method will select an element from a DROPDOWN list
    selectElementFromDropdownList(webElement, value) {
        cy.get(webElement).select(value, {force: true});
    };

    //this method will wait and click on any web element inserted as parameter
    clickOnElement(webElement) {
        cy.get(webElement).should('be.visible').click();
    };

    clickOnElementByIndexThatContainsText(webElement, index, text) {
        cy.get(webElement).eq(index).contains(text).click({force: true})
    }

    //this method wll click on an element by text
    clickOnElementByText(webElement, text) {
        cy.get(webElement).should('be.visible').contains(text).click({force: true});
    };

    clickOnElementByTextNotVisible(webElement, text) {
        cy.get(webElement).contains(text).click({force: true});
    };

    //this method will click on any web element inserted as parameter, with force true
    clickOnElementForceTrue(webElement) {
        cy.get(webElement).click({force: true});
    };
    clickOnElementForceTrueByIndex(webElement, index) {
        cy.get(webElement).eq(index).click({force: true});
    };

    //this method will type any text into an input web element that is inserted as parameter
    typeTextIntoElement(webElement, text) {
        cy.get(webElement).should('be.visible').focus().type(text, {force: true});
    };

    typeTextIntoElementWithNoFocus(webElement, text) {
        cy.get(webElement).should('be.visible').type(text, {force: true});
    };


    //this method gets and checks if a URL contains the specific string inserted as parameter
    assertUserIsRedirectedToExpectedPage(string) {
        cy.url().should('include', string);
    };

    //this method gets and checks inside of a web element if it contains the specific text inserted as parameter
    assertElementContainsExpectedText(webElement, text) {
        cy.get(webElement).should('be.visible').contains(text);
    };

    assertElementDoesNotContainsExpectedText(webElement, text) {
        cy.get(webElement).should('not.contain.text', text)
    };

    //this method will assert WebElement is present in DOM
    assertElementIsPresentInDom(webElement) {
        cy.get(webElement).should('exist')
    };

    //this method will assert if an element is visible
    assertElementIsVisible(webElement) {
        cy.get(webElement).should('be.visible');
    };

    assertElementHasAttribute(webElement, attr) {
        cy.get(webElement).should("have.attr", attr);
    };

    //this method opens the PROD homepage of our project
    openHomepage() {
        commonMethods.visitPage(Cypress.config().baseUrl, {timeout: 30000});
    };

    clearField(webElement) {
        cy.get(webElement).clear();
    };

    clickOnElementByIndexThatHasValue(webElement, index, value) {
        cy.get(webElement).eq(index).should('contain', value).click({force: true});
    };

    hoverElementByIndex(webElement, index) {
        cy.get(webElement).eq(index).trigger('mouseover');
    };

    hoverElementByText(webElement, text) {
        cy.get(webElement).should('contain', text).trigger('mouseover');
    };

    verifyIfWebElementContainsText(webElement) {
        cy.get(webElement).invoke('text').should('not.be.empty')
    };

    //this method is needed in order to be able to run tests without getting cross origin error
    setCrossOriginUncaughtErrorFalse() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
    };

    //for future use
    dbClickOnElementByIndex(webElement, index) {
        cy.get(webElement).eq(index).dblclick();
    };

    //for future use
    dbClickOnElementByIndexForceTrue(webElement, index) {
        cy.get(webElement).eq(index).should('be.visible').dblclick({force: true});
    };


};

export const commonMethods = new CommonMethods();