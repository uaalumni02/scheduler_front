const pageChange = () => {
    const selectedService = document.querySelector('input[name="service"]:checked').value;
    console.log(selectedService);
    document.getElementById('name').style.display = "none";
    document.getElementById('serviceBtn').style.display = "none";
    document.getElementById('calender').style.display = "block";
}

