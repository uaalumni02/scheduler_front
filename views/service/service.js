const nextButton1 = document.getElementById('serviceBtn');

nextButton1.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedService = document.querySelector('input[name="service"]:checked').value;
    console.log(selectedService);
    document.getElementById('name').style.display = "none";
    document.getElementById('serviceBtn').style.display = "none";
    document.getElementById('calender').style.display = "block";

})

const nextButton2 = document.getElementById('calenderBtn');

nextButton2.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('calender').style.display = "none";
    document.getElementById('container-contact100').style.display = "block";
})