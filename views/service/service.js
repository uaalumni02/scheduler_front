const pageChange = () => {
    const selectedService = document.querySelector('input[name="service"]:checked').value;
    console.log(selectedService);
    location.replace("http://localhost:8080/schedule")
}