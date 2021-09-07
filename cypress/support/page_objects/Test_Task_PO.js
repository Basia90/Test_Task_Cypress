class Test_Task_PO {
    accessOrder() {
        cy.visit('https://paczkadoukrainy.pl/')
        cy.get("input[name='parcelWeight']").type('12')
        cy.get('.btn.btn-primary.btn-block.mt-3').click()
        cy.url().should('include', 'weight=120')
        cy.get('.btn.font-weight-bold.btn-primary.height-fit-content.ng-scope').eq(0).click({ force: true })
        cy.get('.custom-control-label.ng-scope').eq(1).click()
    }

    FirstDeliveryPoint() {
        cy.get('#NOVA_POSHTA').click({force: true})
        cy.get("input[type='search']").type('Chornobai, vul. Cherkaska, 18')
        cy.get('.option').first().click()
        cy.get('.card-body.ng-binding').should('contain', 'Maksymalna waga') 
    }

    FirstProduct() {
        cy.get('#parcelItemDescription').type('Czekoladki')
        cy.get('#parcelItemQuantity').type('2')
        cy.get('#parcelItemWeight').type('10')
        cy.get('#parcelItemValueClientCurrency').type('20')
    }

    SecondProduct() {
        cy.get('.pl-0.btn-sm.btn-link.ng-scope').eq(2).click()
        cy.get("input[name='parcelItemDescription-1']").type('Kubek')
        cy.get("input[name='parcelItemQuantity-1']").type('1')
        cy.get("input[name='parcelItemWeight-1']").type('2')
        cy.get("input[name='parcelItemValueClientCurrency-1']").type('5')
    }

    RequiredConditions() {
        cy.get('#orderFormRegulation').click({force: true}).should('be.checked')
        cy.get('#orderProhibitedGoods').click({force: true}).should('be.checked')
        cy.get('#orderFormRegulation2').click({force: true}).should('be.checked')
        cy.get('#orderFormRegulation3').click({force: true}).should('be.checked')
    }
}
export default Test_Task_PO