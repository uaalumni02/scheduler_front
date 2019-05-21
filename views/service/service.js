
const serviceSelector = () => {
    const selectedService = document.querySelector('input[name="service"]:checked').value;
    document.getElementById('name').style.display = "none";
    document.getElementById('calender').style.display = "block";
}


const customerInfo = () => {
    document.getElementById('calender').style.display = "none";
    document.getElementById('container-contact100').style.display = "block";
}

const booked = () => {
    document.getElementById('container-contact100').style.display = "none";
}
