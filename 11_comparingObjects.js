

///Create 2 objects Addess and 2 functions tha compare if instances are equals 
//and if the object is located in the same memory place

class Address {
    constructor (street, city, zip) {
        this.street = street;
        this.city = city;
        this.zip = zip
    }
}

function compareAddress(ad1, ad2){
    return ad1.street === ad2.street && 
    ad1.city === ad2.city &&
    ad1.zip === ad2.zip;

}
function compareMemory(obj1, obj2){
    return obj1 === obj2
}




