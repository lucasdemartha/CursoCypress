/// <reference types="cypress" />

/// <reference types="cypress" />

describe('Esperas...', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it.skip('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it.skip('Deve fazer retrys', () => {

        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')
    })

    it.skip('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it.skip('Uso do timeout', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo').should('exist')

        // cy.get('#buttonListDDM').click()
        // cy.get('#lista li span', { timeout: 30000 })
        //     .should('have.length', 1)
    })


})
