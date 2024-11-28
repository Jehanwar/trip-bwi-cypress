Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
});

describe('Tambah Data Tamu Test Case', () => {
    it('datatm-001: Menambahkan Tamu Baru', () => {
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
        
        // Navigasi ke halaman tambah data tamu
        cy.get('#headerCollapse > i').click();
        cy.get('#sidebarnav > li:nth-child(10) > a').click();
        cy.get('#main-wrapper > div > div > div > div > div > div.card-body.p-4 > a').click();

        // Mengisi field Data Tamu
        cy.get('#nm_tamu').clear().type('John Doe',{ delay: 100 });
        cy.get('#nm_tamu').should('have.value', 'John Doe');
        cy.wait(500);

        // Mengisi field Paket Trip
        cy.get('#paket_trip').type('Paket 1', { force: true });
        cy.get('#paket_trip').should('have.value', 'Paket 1');

        // Mengisi field Start trip
        cy.get('#start_trip').type('2023-08-01', { force: true });
        cy.get('#start_trip').should('have.value', '2023-08-01');

        // Mengisi field Finish trip
        cy.get('#finish_trip').type('2023-08-05', { force: true });
        cy.get('#finish_trip').should('have.value', '2023-08-05');

        // Mengisi field Pax
        cy.get('#pax').type('2', { force: true });
        cy.get('#pax').should('have.value', '2');

        // Mengisi field Meeting Point
        cy.get('#meeting_point').type('Meeting Point 1', { force: true });
        cy.get('#meeting_point').should('have.value', 'Meeting Point 1');

        // Mengisi field Drop Point
        cy.get('#drop_point').type('Drop Point 1', { force: true });
        cy.get('#drop_point').should('have.value', 'Drop Point 1');

        // Mengisi field catatan
        cy.get('#catatan').type('Catatan 1', { force: true });
        cy.get('#catatan').should('have.value', 'Catatan 1');

        //mengisi field no telepon
        cy.get('#no_hp').type('08123456789', { force: true });
        cy.get('#no_hp').should('have.value', '08123456789');
        
        //mengisi field akun sosmed
        cy.get('#akun_sosmed').type('instagram', { force: true });
        cy.get('#akun_sosmed').should('have.value', 'instagram');

        //mengisi field jumlah hari
        cy.get('#days').type('5', { force: true });
        cy.get('#days').should('have.value', '5');

        //mengisi field jumlah malam
        cy.get('#night').type('4', { force: true });
        cy.get('#night').should('have.value', '4');

        //mengisi field dp
        cy.get('#dp_idr').type('5000000', { force: true });
        cy.get('#dp_idr').should('have.value', 'Rp 5.000.000');

        // Mengklik tombol Simpan
        cy.contains('Simpan').click();
        
        // Verifikasi setelah menambahkan data
        cy.url().should('include', 'http://127.0.0.1:8000/tamu');
    });
});