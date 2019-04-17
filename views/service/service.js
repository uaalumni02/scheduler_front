const pageChange = () => {
    const selectedService = document.querySelector('input[name="service"]:checked').value;
    console.log(selectedService);
    document.getElementById('name').style.display = "none";
    document.getElementById('serviceBtn').style.display = "none";
    document.getElementById('calender').style.display = "block";
    
}
const customerInfo = () => {
    document.getElementById('calender').style.display = "none";
    document.getElementById('container-contact100').style.display = "block";
}