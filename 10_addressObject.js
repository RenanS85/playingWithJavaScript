// Create a address Object thata contains:
// - Street
// - CIty
// ZIP Code
// function showAddress(address)

class Address {
    constructor (street, city, zip) {
        this.street = street;
        this.city = city;
        this.zip = zip
    }}

function showAddress(address) {
    console.log(`Street: ${address.street} 
                 City: ${address.city}
                 ZIP code: ${address.zip}`)
}





