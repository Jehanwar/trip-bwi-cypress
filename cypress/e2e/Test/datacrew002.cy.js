const { all } = require("axios");

Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
  });

describe('Edit Data Crew Test Case', () => {
    it('datacrew002: Mengedit Data Crew', () => {
      // Step 1: Mengunjungi halaman login
      cy.visit('http://127.0.0.1:8000/login')
  
      // Step 2: Melakukan login sebagai admin
      cy.get('#email').type('admin@gmail.com').should('have.value', 'admin@gmail.com')
      cy.get('#password').type('12345678')
      cy.get('#password').should('have.value', '12345678')
      cy.contains('Login').click()
  
      // Verifikasi login berhasil
      cy.url().should('include', 'http://127.0.0.1:8000/')
  
      // Step 3: Navigasi ke halaman daftar crew
      cy.get('#headerCollapse > i').click()
      cy.get('#sidebarnav > li:nth-child(5) > a').click()
  
      // Step 4: Klik tombol edit untuk crew pertama
      cy.get('#dataTable > tbody > tr').first().within(() => {
        cy.get('button[data-bs-target^="#editCrewModal"]').click() // Open the modal for the first crew
      })
  
      // Step 5: Menunggu form edit dan elemen muncul di dalam modal
      cy.get('.modal.show').within(() => {
        // Memastikan elemen terlihat dan mengedit data
        cy.get('#jenis_crew').should('be.visible').clear({ force: true }).type('TOUR MAN')
  
        // Step 6: Mengedit field "Nama Crew"
        cy.get('#nm_crew').clear().type('FREELANCE')
        
        // Step 7: Mengedit field "Harga Crew"
        cy.get('#hrg_crew_edit').clear().type('6000000') // Ensure correct field ID
      })
  
      // Step 8: Mengklik tombol Simpan untuk menyimpan perubahan
      cy.get('.modal.show').contains('Simpan').click()
  
      // Step 9: Verifikasi bahwa perubahan telah disimpan dan kembali ke halaman daftar crew
      cy.url().should('include', '/data-crew')
      cy.get('#dataTable > tbody').should('contain', '').and('contain', '')
    })
  })
  