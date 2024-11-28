// Prevent Cypress from failing the test due to uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Delete Data Crew Test Case', () => {
    it('datacrew003: Menghapus Data Crew', () => {
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
  
      // Step 4: Mengklik tombol hapus untuk crew pertama
      cy.get('#dataTable > tbody > tr').eq(8).within(() => { //eq(8) digunakan untuk mengakses elemen ke-9 apabila ingin menghapus data pertama bisa menggunakan .first()
        cy.get('a[data-bs-toggle="tooltip"][title="Hapus"]').click()
      })
      
      // Step 5: Mengonfirmasi penghapusan jika ada dialog konfirmasi
    //   cy.on('window:confirm', (text) => {
    //     expect(text).to.contains('Apakah anda yakin?') // Replace with actual confirmation message
    //     cy.get('.swal2-confirm').contains('Ya, Hapus!').click()// Simulate clicking "OK" on the confirmation dialog
    //   })
    cy.get('.swal2-confirm').should('be.visible').click();
  
      // Step 6: Verifikasi bahwa crew telah dihapus dari daftar
      cy.get('#dataTable > tbody').should('not.contain', 'Nama Crew Terhapus') // Replace with the specific name of the crew deleted, if applicable
    })
  })
  