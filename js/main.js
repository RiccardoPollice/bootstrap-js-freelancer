function service(event) {
    event.preventDefault();

    let typeOfWork = document.getElementById("typeOfWork").value;

    let time = document.getElementById("hours").value;
    time = parseInt(time);

    let discountCode = document.getElementById("discountCode").value;

    let price;

    if (typeOfWork == "Backend") {
        price = time * 20.50;
    }  else if (typeOfWork == "Frontend") {
        price = time * 15.30;
    }  else if (typeOfWork == "Projectanalysis") {
        price = time * 33.60;
    }

    console.log(price);
    
}
