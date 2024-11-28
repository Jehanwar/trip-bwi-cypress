// Prevent Cypress from failing the test due to uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Delete Data Mobil Test Case', () => {
    it('datamobil003: Menghapus Data Mobil', () => {
        // Step 1: Mengunjungi halaman login
        cy.visit('http://127.0.0.1:8000/login');

        // Step 2: Melakukan login sebagai admin
        cy.get('#email').type('admin@gmail.com').should('have.value', 'admin@gmail.com');
        cy.get('#password').type('12345678').should('have.value', '12345678');
        cy.contains('Login').click();

        // Verifikasi login berhasil
        cy.url().should('include', 'http://127.0.0.1:8000/');

        // Step 3: Navigasi ke halaman daftar mobil
        cy.get('#headerCollapse > i').click();
        cy.get('#sidebarnav > li:nth-child(7) > a').click(); // Ganti dengan index menu sidebar yang sesuai untuk halaman daftar mobil

        // Step 4: Mengklik tombol hapus untuk mobil tertentu
        cy.get('#dataTable > tbody > tr').eq(21).within(() => { // .first() digunakan untuk elemen pertama
            cy.get('a[data-bs-toggle="tooltip"][title="Hapus"]').click();
        });

        // Step 5: Mengonfirmasi penghapusan jika ada dialog konfirmasi
        cy.get('.swal2-confirm').should('be.visible').click();

        // Step 6: Verifikasi bahwa data mobil telah dihapus dari daftar
        cy.get('#dataTable > tbody > tr').should('not.contain', 'Data Mobil Terhapus'); // Ganti 'Nama Mobil Terhapus' dengan nama spesifik mobil yang dihapus
    });
});
