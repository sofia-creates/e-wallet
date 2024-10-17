export function validateCardData(data){
    let errors = {};

    //cardNumber 
    if (isNan(data.cardNumber) ){
        errors.cardNumber = "cardNumber must be only numbers"
    }  
    if(data.cardNumber.length != 16){
        errors.cardNumber = "cardNumber must be 16 digits"
    }

    //expirationDate
    //expirationDate cannot be a past date
    //get todays date

}


//cardNumber must be unique

//cardNumber must have 16 numbers, and be only numbers


//cardHolderName can't include numbers

//cardProvider gives card a specific color + logo for cardProvider