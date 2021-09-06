/// <reference types='Cypress' /> 

describe('Validation of forms', () => {

    it('Validation of forms when ordering a package', () => {
        cy.visit('/')
        cy.get("input[name='parcelWeight']").type('12')
        cy.get('.btn.btn-primary.btn-block.mt-3').click()
        cy.get('.btn.font-weight-bold.btn-primary.height-fit-content.ng-scope').eq(0).click()
        cy.get('.custom-control-label.ng-scope').eq(1).click()
        cy.get('#NOVA_POSHTA').click({force: true})
        cy.get("input[type='search']").type('Chornobai, vul. Cherkaska, 18')
        cy.get('.option').first().click()
        cy.get('.card-body.ng-binding').should('contain', 'Maksymalna waga')
        cy.get('#senderName').type('Mobisense Monika Mazurek')
        cy.get('#senderPostalCode').type('25-663')
        cy.get('#senderCity').type('Kielce')
        cy.get('#senderStreet').type('Olszewskiego')
        cy.get('#senderHouseNumber').type('6')
        cy.get('#senderFlatNumber').type('313')
        cy.get('#senderPhone').type('664540929')
        cy.get('#senderEmail').type('monika@sourceful.nl')
        cy.get('#receiverName').type('Наталья Иванова')
        cy.get('#receiverPhone').type('505032236')
        cy.get('#receiverEmail').type('natalia@ivanowa.pl')
        cy.get('#parcelItemDescription').type('Czekoladki')
        cy.get('#parcelItemQuantity').type('2')
        cy.get('#parcelItemWeight').type('10')
        cy.get('#parcelItemValueClientCurrency').type('20')
        cy.get('.pl-0.btn-sm.btn-link.ng-scope').eq(2).click()
        cy.get("input[name='parcelItemDescription-1']").type('Kubek')
        cy.get("input[name='parcelItemQuantity-1']").type('1')
        cy.get("input[name='parcelItemWeight-1']").type('2')
        cy.get("input[name='parcelItemValueClientCurrency-1']").type('5')
        cy.get('#orderFormRegulation').click({force: true})
        cy.get('#orderProhibitedGoods').click({force: true})
        cy.get('#orderFormRegulation2').click({force: true})
        cy.get('#orderFormRegulation3').click({force: true})
        cy.get('#btn_next_step').click()
    });
})

//responsywność
//globalnie do całych testów zmienić w cypress.json 
//viewportHeight:660
//viewportWidth:1000
//lolaknie w teście: cy.viewport 