

const nextButton1 = document.getElementById('serviceBtn');

nextButton1.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedService = document.querySelector('input[name="service"]:checked').value;
    document.getElementById('name').style.display = "none";
    document.getElementById('serviceBtn').style.display = "none";
    document.getElementById('calender').style.display = "block";

})


const customerInfo = () => {
    document.getElementById('calender').style.display = "none";
    document.getElementById('container-contact100').style.display = "block";
}

const booked = () => {
    document.getElementById('container-contact100').style.display = "none";
}
