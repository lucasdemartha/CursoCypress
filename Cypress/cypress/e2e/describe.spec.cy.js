/// <reference types="cypress" />

//only -> Executa apenas o teste que contém o only
//skip -> Pula o teste que contém o skip

it('A external test...', () => {

})

describe('Should group tests...', () => {
    describe('Should group more specific tests...', () => {
        it.skip('A specific test...', () => {

        })
    })

    describe('Should group more specific tests 2...', () => {
        it('A specific test 2...', () => {

        })
    })

    it('A internal test...', () => {

    })
})