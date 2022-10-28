
import { React, useState, useEffect } from "react";
import "./style.css"

export default function PaymentForm ({total, split}) {

    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardCVV, setCardCvv] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [showResponse, setShowResponse] = useState("");
    const [paidByType, setPaidByType] = useState("");


    var testCards = [
        // amex: "34343434343434",
        { type: "Maestro", number: "6759649826438453" },
        { type: "MasterCard", number: "5555555555554444" },
        { type: "Visa", number: "4444333322221111" },
        { type: "Visa Debit", number: "4462030000000000" },
        { type: "JCB", number: "3528000700000000" }
    ]

    // Strip anything thats not a digit
    function numbersOnlyFool(value) {
        return value.replace(/\D/g, '');
    }

    // on change setters

    function cardNumberOnChange(e){
        var newValue = numbersOnlyFool(e.target.value);
        validateCardNumber(newValue)
        setCardNumber(newValue);
    }

    function nameOnChange(e){
        setCardNumber(numbersOnlyFool(e.target.value));
    }

    function nameOnChange(e){
        setCardName(e.target.value);
    }

    function expiryOnChange(e){
        var basicValue = numbersOnlyFool(e.target.value);
        setCardExpiry(basicValue.replace(/^(\d{2})/, '$1/'));
    }

    function cvvOnChange(e) {
        setCardCvv(numbersOnlyFool(e.target.value));
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        var matchedCard = testCards.find(x => x.number == cardNumber);
        if(matchedCard) {
            setPaidByType(matchedCard.type);
            setShowResponse(true);
        }
        else {
            alert('Sorry, please check your details and try again');
        }
    }
    

    // field validation

    function validateCardNumber(value){

    }
    
    if(showResponse){
        return (
            <div class="form-wrap text-center mt-5">
                <h1>Thank you for your payment!</h1>
                <p>We have processed your {paidByType} payment succesfully!</p>
            </div>
        )
    }
    else {
        return (
            <div class="form-wrap">
                <h2 class="mb-4">Pay By Card</h2>
                <p class="mb-2">Please enter your card details below to pay for {((split != 0) ? `Your ${split} selected items` : 'order')}.</p>
                <p class="mb-4">Amount to be paid: £{total}</p>
                <form class="row" onSubmit={handleSubmit}>
                    <div className="form-group col-12">
                        <label className="mb-2">Card Number</label>
                        <input className="form-control {(invalidCardNumber ? '' : 'invalid')}" type="text" minLength="16" maxlength="16"  value={cardNumber} onChange={cardNumberOnChange} required />
                    </div>
                    <div className="form-group col-12">
                        <label className="mb-2">Name</label>
                        <input className="form-control" type="text" value={cardName} onChange={nameOnChange} required />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="mb-2">Expiry Date</label>
                        <input className="form-control" minLength="5" maxlength="5" value={cardExpiry} type="text" onChange={expiryOnChange} required />
                    </div>
                    <div className="form-group col-md-6">
                        <label className="mb-2">CVV</label>
                        <input className="form-control" value={cardCVV} type="text" onChange={cvvOnChange} minLength="3" maxLength="3" required />
                    </div>
                    <div class="col-12 form-group text-center mt-3">
                        <button type="submit" class="btn btn-primary mb-2">Make Card Payment</button>
                    </div>
                </form>
            </div>
        )
    }
}