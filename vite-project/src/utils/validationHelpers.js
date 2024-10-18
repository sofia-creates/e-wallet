import { useSelector } from "react-redux";

export function validateCardData(data){
    const cards = useSelector((state) => state.cards.cards);
    
    let errors = {};

    //cardNumber 
    //cardNumber must have 16 numbers, and be only numbers
    // Remove spaces from cardNumber for validation
    const sanitizedCardNumber = data.cardNumber.replace(/\s+/g, '');

    if (isNaN(sanitizedCardNumber) ){
        errors.cardNumber = "Card number must be only numbers"
    }  
    if(sanitizedCardNumber.length !== 16){
        errors.cardNumber = "Card number must be 16 digits"
    }

    //cardNumber must be unique
    let doesCardNumberAlreadyExist = () => {
        //get all cards, find the cardNumber within list
        
    }


    //expirationDate

    //get todays date
    const date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;

    function isExpirationDateValid(data){
        // Split the expiration date into year and month
        const [expYear, expMonth] = data.expirationDate.split("-").map(Number); // Convert both to numbers

        //compare
        if (expYear < currentYear){
            errors.expirationDate = "Expiration date has passed"
        } else if (expYear == currentYear && expMonth < currentMonth){
            errors.expirationDate = "Expiration date has passed"
        } else {
            console.log("Card is not expired")
        }
    }

    isExpirationDateValid(data);


    //cardHolderName can't include numbers
    function containsNumber(str) {
        // Check if the string contains any digit between 0 and 9
        return /\d/.test(str);
    }
    
    if(containsNumber(data.cardHolderName)){
        errors.cardHolderName = "Card holder name cannot include numbers"
    }


    const hasErrors = Object.keys(errors).length > 0;
    return [hasErrors, errors];
}


//cardProvider gives card a specific color + logo for cardProvider