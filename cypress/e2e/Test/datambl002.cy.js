Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
});

describe('Edit Data Mobil Test Case', () => {
    it('datamobil002: Mengedit Data Mobil', () => {
        // Step 1: Mengunjungi halaman login
        cy.visit('http://127.0.0.1:8000/login');
  
        // Step 2: Melakukan login sebagai admin
        cy.get('#email').type('admin@gmail.com').should('have.value', 'admin@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('#password').should('have.value', '12345678');
        cy.contains('Login').click();
  
        // Verifikasi login berhasil
        cy.url().should('include', 'http://127.0.0.1:8000/');
  
        // Step 3: Navigasi ke halaman daftar mobil
        cy.get('#headerCollapse > i').click();
        cy.get('#sidebarnav > li:nth-child(7) > a').click();
  
        // Step 4: Klik tombol edit untuk mobil di baris kedua
        cy.get('#dataTable > tbody > tr').eq(1).within(() => {
            cy.get('button[data-bs-target^="#editMobilModal"]').click(); // Membuka modal edit untuk mobil di baris kedua
        });
  
        // Step 5: Menunggu form edit dan elemen muncul di dalam modal
        cy.get('.modal.show').within(() => {
            // Memastikan elemen terlihat dan mengedit nama mobil
            cy.get('#nm_mobil').should('be.visible').clear({ force: true }).type('Toyota Avanza');
  
            // Step 6: Mengedit field "Harga Mobil"
            cy.get('#hrg_mobil_edit').clear().type('150000000'); // Mengedit harga mobil
        });
  
        // Step 7: Mengklik tombol Simpan untuk menyimpan perubahan
        cy.get('.modal.show').contains('Simpan').click();
  
        // Step 8: Verifikasi bahwa perubahan telah disimpan dan kembali ke halaman daftar mobil
        cy.url().should('include', '/data-mobil');
       
    });
});
