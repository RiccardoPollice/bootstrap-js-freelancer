function calculateService(event) {
    calculateService.preventDefault();

    let typeOfWork= document.getElementById("typeOfWork");
    let optionWork= typeOfWork.options[typeOfWork.selectedIndex].value;

    let time= document.getElementById("hours").value;
    time= parseInt(time);

    let discountCode= document.getElementById("discountCode").value;

    if (optionService == "Backend") {
        let price = time * 20.50
        console.log(price);

    } 

    else if (optionService == "Frontend") {
        let price = time * 15.30
        console.log(price);

    } 

    else if (optionService == "Projectanalysis") {
        let price = time * 33.60
        console.log(price);
    }
}
