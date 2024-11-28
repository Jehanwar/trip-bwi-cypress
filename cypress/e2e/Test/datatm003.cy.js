Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
});

describe('Hapus Data Tamu Test Case', () => {
    it('datatm-003: Menghapus Data Tamu', () => {
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
        
        // Navigasi ke halaman data tamu
        cy.get('#headerCollapse > i').click();
        cy.get('#sidebarnav > li:nth-child(10) > a').click();

        // Pilih data tamu yang ingin dihapus
        cy.get('#dataTable > tbody > tr').eq(3).within(() => { // .first() digunakan untuk elemen pertama
            cy.get('a[data-bs-toggle="tooltip"][title="Hapus"]').click();
        });

        // Konfirmasi penghapusan
        cy.on('window:confirm', (text) => {
            expect(text).to.contains('Apakah Anda yakin ingin menghapus data ini?'); // Sesuaikan teks konfirmasi
            return true; // Mengklik tombol "OK" pada dialog konfirmasi
        });

         // Step 5: Mengonfirmasi penghapusan jika ada dialog konfirmasi
        cy.get('.swal2-confirm').should('be.visible').click();


        // Tunggu penghapusan selesai dan verifikasi
        cy.url().should('include', 'http://127.0.0.1:8000/tamu');

        // Verifikasi bahwa data yang dihapus sudah tidak ada di tabel
         // Sesuaikan nama atau data yang ingin diverifikasi
    });
});
