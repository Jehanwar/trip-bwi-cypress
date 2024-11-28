Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
});

describe('Edit Data Tamu Test Case', () => {
    it('datatm-002: Mengedit Data Mobil', () => {
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

        // Pilih data tamu yang ingin diedit
        cy.get('#dataTable > tbody > tr:nth-child(4) > td:nth-child(6) > div > a:nth-child(1) > span > i').click(); // Ubah selector sesuai dengan struktur HTML halaman

        // Mengedit field Nama Tamu
        cy.get('#nm_tamu').clear().type('Jane Doe', { delay: 100 });
        cy.get('#nm_tamu').should('have.value', 'Jane Doe');
        cy.wait(500);

        // Mengedit field Paket Trip
        cy.get('#paket_trip').clear().type('Paket 2', { force: true });
        cy.get('#paket_trip').should('have.value', 'Paket 2');

        // Mengedit field Start trip
        cy.get('#start_trip').clear().type('2023-08-10', { force: true });
        cy.get('#start_trip').should('have.value', '2023-08-10');

        // Mengedit field Finish trip
        cy.get('#finish_trip').clear().type('2023-08-15', { force: true });
        cy.get('#finish_trip').should('have.value', '2023-08-15');

        // Mengedit field Pax
        cy.get('#pax').clear().type('3', { force: true });
        cy.get('#pax').should('have.value', '3');

        // Mengedit field Meeting Point
        cy.get('#meeting_point').clear().type('Meeting Point 2', { force: true });
        cy.get('#meeting_point').should('have.value', 'Meeting Point 2');

        // Mengedit field Drop Point
        cy.get('#drop_point').clear().type('Drop Point 2', { force: true });
        cy.get('#drop_point').should('have.value', 'Drop Point 2');

        // Mengedit field catatan
        cy.get('#catatan').clear().type('Catatan diperbarui', { force: true });
        cy.get('#catatan').should('have.value', 'Catatan diperbarui');

        // Mengedit field No Telepon
        cy.get('#no_hp').clear().type('08987654321', { force: true });
        cy.get('#no_hp').should('have.value', '08987654321');

        // Mengedit field Akun Sosmed
        cy.get('#akun_sosmed').clear().type('facebook', { force: true });
        cy.get('#akun_sosmed').should('have.value', 'facebook');

        // Mengedit field Jumlah Hari
        cy.get('#days').clear().type('6', { force: true });
        cy.get('#days').should('have.value', '6');

        // Mengedit field Jumlah Malam
        cy.get('#night').clear().type('5', { force: true });
        cy.get('#night').should('have.value', '5');

        // Mengedit field DP
        cy.get('#dp_edit').clear().type('6000000', { force: true });
        

        // Mengklik tombol Simpan
        cy.contains('Simpan').click();
        
        // Verifikasi setelah mengedit data tamu
        cy.url().should('include', 'http://127.0.0.1:8000/tamu');

        // Verifikasi data yang diedit muncul di tabel
        cy.get('#dataTable').should('contain', 'Jane Doe'); // Sesuaikan selector
    });
});
