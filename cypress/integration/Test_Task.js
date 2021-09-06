import Test_Task_PO from '../support/page_objects/Test_Task_PO'
/// <reference types='Cypress' /> 

describe('Validation of forms when ordering a package', () => {
    const accessorder_PO = new Test_Task_PO()
    const product_PO = new Test_Task_PO()
    const requiredconditions_PO = new Test_Task_PO
    const deliverypoint_PO = new Test_Task_PO

    beforeEach(function() {
        accessorder_PO.accessOrder()
    });

    it('Ordering an InPost package', () => {
        deliverypoint_PO.FirstDeliveryPoint()
        cy.sender_data()
        cy.recipient_data('Наталья Иванова', '505032236', 'natalia@ivanowa.pl')
        product_PO.FirstProduct()
        product_PO.SecondProduct()
        cy.get("input[name='totalValue']").should('have.value', '25.00')
        requiredconditions_PO.RequiredConditions()
        cy.get('#btn_next_step').click()
    });
})