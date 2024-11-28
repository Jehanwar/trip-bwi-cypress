const { all } = require("axios");

Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
  });

describe('Edit Data Destination Test Case', () => {
    it('datades002: Mengedit Data Destinasi', () => {
      // Step 1: Mengunjungi halaman login
      cy.visit('http://127.0.0.1:8000/login')
  
      // Step 2: Melakukan login sebagai admin
      cy.get('#email').type('admin@gmail.com').should('have.value', 'admin@gmail.com')
      cy.get('#password').type('12345678')
      cy.get('#password').should('have.value', '12345678')
      cy.contains('Login').click()
  
      // Verifikasi login berhasil
      cy.url().should('include', 'http://127.0.0.1:8000/')
  
      // Step 3: Navigasi ke halaman daftar destinasi
      cy.get('#headerCollapse > i').click()
      cy.get('#sidebarnav > li:nth-child(6) > a').click()
  
      // Step 4: Klik tombol edit untuk destinasi baris kedua
      cy.get('#dataTable > tbody > tr').eq(1).within(() => {
        cy.get('button[data-bs-target^="#editDestinationModal2"]').click() // Open the modal for the second crew
      })
  
      // Step 5: Menunggu form edit dan elemen muncul di dalam modal
      cy.get('.modal.show').within(() => {
        // Memastikan elemen terlihat dan mengedit data destination
        cy.get('#nm_destination').should('be.visible').clear({ force: true }).type('BALURAN')
  
        // Step 6: Mengedit field "Kode Destination"
        cy.get('#kode_destination').clear().type('BLR')
        
        // Step 7: Mengedit field "Harga Destination"
        cy.get('#hrg_destination_edit').clear().type('50000') // Ensure correct field ID
      })
  
      // Step 8: Mengklik tombol Simpan untuk menyimpan perubahan
      cy.get('.modal.show').contains('Simpan').click()
  
      // Step 9: Verifikasi bahwa perubahan telah disimpan dan kembali ke halaman daftar crew
      cy.url().should('include', '/data-destination')
      cy.get('#dataTable > tbody').should('contain', '').and('contain', '')
    })
  })
  