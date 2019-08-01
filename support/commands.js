// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
/*
Cypress.Commands.add('login',function(){
    cy.visit('https://fitmech.com/user/login')
    cy.get(':nth-child(1) > .control > .input')
        .type('hakuzaijo@gmail.com')
    cy.get(':nth-child(2) > .control > .input')
        .type('test')
*/
Cypress.Commands.add('login', function(){  
  cy.get(':nth-child(1) > .control > .input')
    .type(this.haku.email)
    .should('have.value',this.haku.email)   

            cy.get(':nth-child(2) > .control > .input')
                .type(this.haku.password)
                .should('have.value', this.haku.password) 
            cy.get('.button').click()   
          })


import '@percy/cypress'



import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand({
  failureThreshold: 0.00,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.0 },
  capture: 'viewport',
});
Cypress.Commands.add("setResolution", (size) => {
  if (Cypress._.isArray(size)) {
     cy.viewport(size[0], size[1]);
   } else {
    cy.viewport(size);
  }
 })

let seenSelectors = []
const rememberSelector = (selector) => {
  seenSelectors.push(selector)
}

Cypress.Commands.overwrite('type',
  (type, $el, text, options) => {

  rememberSelector($el)

  return type($el, text, options)
})


/*
Cypress.Commands.add('beautifulLogin', ()=>{
    cy.request({
        method: 'POST',
        url: '/login',
        body:{
            user: {
                email: 'hakuzaijo@gmail.com',
                password: 'gamera1912fh',
            }
        }
    })
    .then((resp) => {
        window.localStorage.setItem('jwt', resp.body.user.token)
    })
})

*/