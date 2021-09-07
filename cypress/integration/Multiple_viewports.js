import Test_Task_PO from '../support/page_objects/Test_Task_PO'
/// <reference types='Cypress' /> 

const sizes = ['iphone-6', 'samsung-s10', [1024, 768]]

describe('Ordering an InPost package', () => {
    const accessorder_PO = new Test_Task_PO()
    const product_PO = new Test_Task_PO()
    const requiredconditions_PO = new Test_Task_PO
    const deliverypoint_PO = new Test_Task_PO

    sizes.forEach((size) => {

        it(`Do the test on ${size} screen`, () => {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
            } else {
                cy.viewport(size)
            }
            accessorder_PO.accessOrder()
            deliverypoint_PO.FirstDeliveryPoint()
            cy.sender_data()
            cy.recipient_data('Наталья Иванова', '505032236', 'natalia@ivanowa.pl')
            product_PO.FirstProduct()
            product_PO.SecondProduct()
            cy.get("input[name='totalValue']").should('have.value', '25.00')
            requiredconditions_PO.RequiredConditions()
            cy.get('#btn_next_step').click()
        })
    })
})