Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
  });

describe('Tambah Data Crew Test Case', () => {
    it('datacrew001: Menambahkan Crew Baru', () => {
      // Mengunjungi halaman tambah data crew
      cy.visit('http://127.0.0.1:8000/login')
  
    cy.get('#email').type('admin@gmail.com')

    
    cy.get('#email').should('have.value', 'admin@gmail.com')
    cy.get('#password').type('12345678')
    cy.get('#password').should('have.value', '12345678')
    cy.url().should('include', 'http://127.0.0.1:8000/')
    cy.contains('Login').click()
    
    cy.get('#headerCollapse > i').click();
    cy.get('#sidebarnav > li:nth-child(5) > a').click()
    cy.get('#main-wrapper > div > div > div > div > div > div.card-body.p-4 > a').click()

    cy.get('#jenis_crew').type('Pilot')
    cy.get('#jenis_crew').should('have.value', 'Pilot')
    cy.wait(500);

    // Mengisi field Nama Crew
    cy.get('#nm_crew').type('John Doe')
    cy.get('#nm_crew').should('have.value', 'John Doe')
    cy.wait(500);

    // Mengisi field Harga Crew
    cy.get('#hrg_crew_idr').type('5000000')
    cy.get('#hrg_crew_idr').should('have.value', 'Rp 5.000.000')

    // Mengklik tombol Simpan
    cy.contains('Simpan').click()
  
    
    })
  })