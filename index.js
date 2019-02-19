document.querySelector("#payment").addEventListener("submit", function(x) {
    x.preventDefault(x);
    
    let creditCard = document.querySelector("#inputCard4");
    creditCard.style.background = "inherit";
    if (creditCard.value.length != 16) creditCard.style.background = "red";
    
    let cvcCode = document.querySelector("#inputCvc4");
    cvcCode.style.background = "inherit";
    if ((cvcCode.value.length < 3) || (cvcCode.value.length > 4)) cvcCode.style.background = "red";
    
    let dollarAmount = document.querySelector("#inputAmount4");
    dollarAmount.style.background = "inherit";
    if (dollarAmount.value.length < 1) dollarAmount.style.background = "red";
    
    let firstName = document.querySelector("#inputFirstName");
    firstName.style.background = "inherit";
    if (firstName.value.length < 2) firstName.style.background = "red";
    
    let lastName = document.querySelector("#inputLastName");
    lastName.style.background = "inherit";
    if (lastName.value.length < 2) lastName.style.background = "red";
    
    let city = document.querySelector("#inputCity");
    city.style.background = "inherit";
    if (city.value.length < 2) city.style.background = "red";
    
    let state = document.querySelector("#inputState");
    state.style.background = "inherit";
    if (state.value === "Pick a state") state.style.background = "red";
    
    let postalCode = document.querySelector("#inputPostalCode");
    postalCode.style.background = "inherit";
    if (postalCode.value.length != 5) postalCode.style.background = "red";
    
    let paymentMethod = document.querySelectorAll(".form-check-input");
    let creditBackground = document.querySelector(".credits");
    creditBackground.style.background = "gray";
    let z = false;
    for(x=0; x<paymentMethod.length; x++) {
        if (paymentMethod[x].checked === true) z = true;
    }
        
    if (z === false) creditBackground.style.background = "red";
    
})