var customerName = 'bob'
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
    //customerName.toUpperCase
    //return customerName
}

function setBestCustomer(){
    bestCustomer = 'not bob'
    return bestCustomer
}
function overwriteBestCustomer (){ 
    bestCustomer = 'maybe bob'
    return bestCustomer
}

const leastFavoriteCustomer = 'bobb'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'joe'
    return leastFavoriteCustomer
}