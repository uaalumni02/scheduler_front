const nextButton1 = document.getElementById('serviceBtn');

nextButton1.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedService = document.querySelector('input[name="service"]:checked').value;
    console.log(selectedService);
    document.getElementById('name').style.display = "none";
    document.getElementById('serviceBtn').style.display = "none";
    document.getElementById('calender').style.display = "block";

})


//temp value checker
// const timesCheck = () => {
//     const time = document.querySelector('input[name="timeInfo"]:checked').value;
//     console.log(time)
// }

const customerInfo = () => {
    document.getElementById('calender').style.display = "none";
    document.getElementById('container-contact100').style.display = "block";
}
