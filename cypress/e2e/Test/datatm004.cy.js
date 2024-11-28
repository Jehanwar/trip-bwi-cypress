Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false; 
});

describe ('Koneksi Tagihan Data Tamu Test Case', () => {
    it      ('datatm-004: Koneksi Tagihan Data Tamu', () => {
        
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

    // Pilih data tamu yang ingin di lihat detail data tagihan tamu
    cy.get('#dataTable > tbody > tr:nth-child(1) > td:nth-child(6) > div > a:nth-child(3) > span > i').click();
    //scroll halaman ke bawah
    cy.get('#main-wrapper > div > div > form:nth-child(2) > div > div > div > div.card-header > h5').scrollIntoView()
    //isi field data tagihan tamu 
    cy.get('#days').type('1', { force: true });
    //pilih destinasi  
    cy.get('#destinationTable > tbody > tr.destinasi-item > td:nth-child(3) > div > select').select(2).should('have.value', '2');
    cy.wait(500);
    //pilih mobil
    cy.get('#destinationTable > tbody > tr.mobil-item > td:nth-child(3) > div > select').select(2).should('have.value', '2');
    cy.get('#destinationTable > tbody > tr.mobil-item > td:nth-child(4) > input').type('1', { force: true });
    cy.wait(500);
    //pilih crew
    cy.get('#destinationTable > tbody > tr.crew-item > td:nth-child(3) > div > select').select(2, { force: true }).should('have.value', '5');
    cy.get('#destinationTable > tbody > tr.crew-item > td:nth-child(4) > input').type('1', { force: true });
    cy.wait(500);
    //simpan data tagihan 
    cy.get('#add-data').click();

    //pilih akodomation
    cy.get('#accomodationBody > tr > td:nth-child(2) > div > select').select(2).should('have.value', '2');
    cy.get('#add-data-accomodation').click();
    cy.wait(500);

    //pilih budget konsumsi
    cy.get('#meatTableBody > tr > td:nth-child(2) > input').type('500000', { force: true });
    cy.get('#meatTableBody > tr > td:nth-child(3) > input').type('2', { force: true });
    cy.get('#add-data-accomodation').click();
    cy.wait(500);

    



})   
})