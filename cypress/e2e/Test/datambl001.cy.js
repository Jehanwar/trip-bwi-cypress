Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
});

describe('Tambah Data Mobil Test Case', () => {
    it('datamobil-001: Menambahkan Mobil Baru', () => {
        // Mengunjungi halaman login
        cy.visit('http://127.0.0.1:8000/login');
  
        // Mengisi email dan password lalu login
        cy.get('#email').type('admin@gmail.com');
        cy.get('#email').should('have.value', 'admin@gmail.com');
        cy.get('#password').type('12345678');
        cy.get('#password').should('have.value', '12345678');
        cy.contains('Login').click();
        
        // Verifikasi setelah login
        cy.url().should('include', 'http://127.0.0.1:8000/');
        
        // Navigasi ke halaman tambah data mobil
        cy.get('#headerCollapse > i').click();
        cy.get('#sidebarnav > li:nth-child(7) > a').click();
        cy.get('#main-wrapper > div > div > div > div > div > div.card-body.p-4 > a').click();

        // Mengisi field Nama Mobil
        cy.get('#nm_mobil').clear().type('Toyota Avanza',{ delay: 100 });
        cy.get('#nm_mobil').should('have.value', 'Toyota Avanza');
        cy.wait(500);

        // Mengisi field Harga Mobil
        cy.get('#hrg_mobil').type('150000000', { force: true });
        cy.get('#hrg_mobil').should('have.value', '150000000');

        // Mengklik tombol Simpan
        cy.contains('Simpan').click();

        // Memverifikasi bahwa data berhasil disimpan
        cy.url().should('include', '/data-mobil');
    });
});
