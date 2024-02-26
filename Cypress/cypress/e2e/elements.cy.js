/// <reference types="cypress" />

describe('Work with basic elements ', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it.skip('Text',() => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })
    it.skip('Links',() => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it.skip('TextFields',() => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes') // para pegar o id com : é necessário colocar \\:
            .type('textarea')
            .should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')
            .should('have.value', '???')

        cy.get('[data-cy="dataSobrenome"]')
            .type('Teste12345{backspace}{backspace}') // backspace para apagar
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay: 100}) // delay para simular digitação // selectall para selecionar tudo
            .should('have.value', 'acerto')
    })

    it.skip('RadioButton',() => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc')
            .should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2)
    })

    it.skip('CheckBox',() => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name=formComidaFavorita]').click({multiple: true})
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
        cy.get('#formComidaCarne').should('be.checked')
        cy.get('#formComidaFrango').should('be.checked')
    })

    it.skip('Combo',() => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('2o grau completo')
            .should('have.value', '2graucomp') // value do option (ver html do select)

        cy.get('[data-test="dataEscolaridade"]')
            .select('1graucomp')
            .should('have.value', '1graucomp') // value do option (ver html do select)
        
        //TODO validar opções do combo
    })

    it.skip('Combo Multiplo',() => {
        cy.get('[data-testid="dataEsportes"]')
            .select(['natacao', 'Corrida', 'nada']) // seleciona mais de um item

        //TODO validar opções selecionadas no combo multiplo
    })
})