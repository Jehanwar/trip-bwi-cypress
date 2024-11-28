Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
  });

describe('Tambah Data Destination Test Case', () => {
    it('datades-001: Menambahkan Destinasi Baru', () => {
      // Mengunjungi halaman tambah data crew
      cy.visit('http://127.0.0.1:8000/login')
  
    cy.get('#email').type('admin@gmail.com')

    
    cy.get('#email').should('have.value', 'admin@gmail.com')
    cy.get('#password').type('12345678')
    cy.get('#password').should('have.value', '12345678')
    cy.url().should('include', 'http://127.0.0.1:8000/')
    cy.contains('Login').click()
    
    cy.get('#headerCollapse > i').click();
    cy.get('#sidebarnav > li:nth-child(6) > a').click()
    cy.get('#main-wrapper > div > div > div > div > div > div.card-body.p-4 > a').click()

    // Mengisi field Destination
    cy.get('#nm_destination').clear().type('ALAS PURWO')
    cy.get('#nm_destination').should('have.value', 'ALAS PURWO')
    cy.wait(500);

    // Mengisi field Nama Crew
    cy.get('#kode_destination').type('ALP')
    cy.get('#kode_destination').should('have.value', 'ALP')
    cy.wait(500);

    // Mengisi field Harga Crew
    cy.get('#hrg_destination').type('5000000',{ force: true })
    cy.get('#hrg_destination').should('have.value', '5000000', )

    // Mengklik tombol Simpan
    cy.contains('Simpan').click()

    // Mengverifikasi bahwa perubahan telah disimpan
    cy.url().should('include', '/data-destination')
    
    })
  })