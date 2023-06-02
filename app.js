const { faker } = require('@faker-js/faker');

const lodash = require('lodash')


function randomPersons(result = []){
    for (let i = 0; i <= 10; i++) { 
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email();
        const phone = faker.phone.number();
        result.push({firstName,lastName,email,phone})
    }
    return result;
}

const user = randomPersons()
console.log(user)
let sortUser = lodash.sortBy(user,'firstName')

console.log(sortUser)