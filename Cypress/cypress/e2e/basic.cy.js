/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.skip('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //cy.pause()

        cy.title().should('be.equal', 'Campo de Treinamento') //titulo for igual a 'Campo de Treinamento'
        cy.title().should('contain', 'Campo') //titulo contem 'Campo'

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo') //titulo for igual a 'Campo de Treinamento' e contem 'Campo'
            
        //TODO imprimir o log no console
        //TODO escrever o log em um campo de texto
    })

    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')

    })
})