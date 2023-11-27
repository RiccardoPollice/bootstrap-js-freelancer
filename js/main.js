let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]

function service(event) {
    event.preventDefault();
    let typeOfWork = document.getElementById("typeOfWork").value;

    let time = document.getElementById("hours").value;
    time = parseInt(time);
    let discountCode = document.getElementById("discountCode").value;
    let discountValid = false;
    for (let i = 0; i < discountCodes.length; i++) {
        if (discountCode === discountCodes[i]) {
            discountValid = true;
            discountCodes.splice(i, 1);
            break;
        }
    }
     if (discountValid) {
        if (typeOfWork == "Backend") {
            let price = time * 20.50 *0.75;
            price = price.toFixed(2);
            console.log(price);
        }
        else if (typeOfWork == "Frontend") {
            let price = time * 15.30 * 0.75;
            price = price.toFixed(2);
            console.log(price);
        }
        else if (typeOfWork == "Projectanlaysis") {
            let price = time * 15.30 * 0.75;
            price = price.toFixed(2);
            console.log(price);
        };
    }
    else {
        alert ("Codice sconto non valido")
        if (typeOfWork == "Backend") {
            let price = time *20.50;
            console.log(price);
        }
        else if (typeOfWork == "Frontend") {
            let price = time * 15.30;
            console.log(price);
        }
        else if (typeOfWork == "PProjectanlaysis") {
            let price = time * 33.60;
            console.log(price);
        }
    }



}
