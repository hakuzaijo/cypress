/*

test-engineer.pl
beforeEach (function(){
    cy.visit('/')
    cy.fixture('/testengineerpl/homeScreenVariables').as("homeScreen")
    })


describe('[UI]Test my website ', function(){ 
    it('Should verify correct www address', function(){
        cy.url().should("include", 'http://www.test-engineer.pl')
        })

    it('should verify existing UI elements on website', function(){
        cy.get(this.homeScreen.artykulyImage)
        cy.get(this.homeScreen.recenzjeImage)
        cy.get(this.homeScreen.newsyImage)
    })
})*/




beforeEach (function(){
    cy.visit('https://fitmech.com/user/login')
    cy.fixture("user/haku").as("haku");
})  
    
    describe('Windows testing', function(){

        it('should open login page', function(){
            cy.url().should('include','/user/login')
        })

        it('should allow to read terms', function(){
            cy.get('.cc-link')
            .should('have.attr','href')
            .and('include','/terms')
        })

        it('should close bottom menu', function(){
            cy.get('.cc-btn')
                .should('contain','Clear!')
                .click()
            cy.wait(10000)
        })

        it('should allow to chat', function(){
            cy.get('[id="bubble-image"]').click()
            cy.wait(20000)
        })
        
        it('should be able to type login', function(){   
            cy.login() 

            cy.get('[class="subtitle has-text-link"]')
                .should("contain","Głowica 1")
            cy.get('[class="subtitle has-text-link"]')
                .should('contain', 'Głowica 2')
          })
        it('should have working need an account? link', function(){
            cy.get('[href="/user/register"]')
                .should('have.attr','href')
                .and('include', "/user/register")
        })

        it('should have working forgot password? link', function(){
            cy.get('[href="/user/remind"]')
                .should('have.attr','href')
                .and('include', '/user/remind')
        })

        
    })
  /*

    })    
   

     it('Open login page by clicking hamburger menu',function(){
        cy.visit('https://fitmech.com/welcome')
        cy.get('.navbar-burger')
            .click()
        cy.get('[href="/monitor/status"]')
            .click()


       


              beforeEach(() => {
        cy.beautifulLogin()   
   
    
   
     it('greets with Login ti FitMech',function(){
        cy.visit('https://fitmech.com/user/login')
        cy.contains('h1', 'Login to FitMech')
        cy.contains('h2','Please login to proceed')
    })

    it('<Need an account> link is clickable', function(){
        cy
        .contains('Need an account?')
        .should('have.attr','href','/user/register')
    })

    it('<Forgot password> link is clickable', function(){
        cy
        .contains('Forgot password?')
        .should('have.attr','href','/user/remind')
    })    

    it('Error message if you try to login incorrectly', function(){
        cy.get('.button.is-primary').click()
        cy.get('.message-body')
            .should('contain','Error: An error occurred during login. Please try again or contact us.')
    })

   

    
    it('Login to website',function(){
        cy.get(':nth-child(1) > .control > .input')
            .type('hakuzaijo@gmail.com')
        cy.get(':nth-child(2) > .control > .input')
            .type('gamera1912fh')
        cy.get('.button').contains('Login').click()

        cy.get('.navbar-burger')
            .click()
        cy.get('[href="/user/logout"]')
            .click()
    })
    




















describe('My First time', function(){
    it("Makes an assertion", function(){
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.opacity-cover').click({force:true})
        cy.get('.action-div').dblclick()
        cy.get('[class="action-input-hidden form-control"]')
            .clear()
            .type('dupa').should('have.value','dupa')
        cy.get('.action-multiple-checkboxes [type="checkbox"]')
            .check('checkbox2').should('be.checked')
        cy.get('.action-radios [type="radio"]')
            .check('radio2').should('be.checked')
        
        cy.get('.action-check [type="checkbox"]')
            .uncheck("checkbox1").should('not.be.checked')})
    it("different set of tests", function(){
        cy.get(".action-select").select('oranges')
        cy.get('.action-select-multiple').select(['apples','bananas'])

        cy.get('[id="scroll-horizontal"]').scrollTo('right',{duration: 2000})



    })
        //stub requests?
        //requires fixtures?
        //brittle selectors


    



})
*/
