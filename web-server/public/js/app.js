const weatherform = document.querySelector('form');
const searchTerm = document.querySelector('input');
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");

weatherform.addEventListener('submit', (e) => {

    // form submit by default refreshes the browser so to avoid that we add this event method
    e.preventDefault();

    msg1.textContent = "Loading...";
    msg2.textContent = "";
    fetch('http://localhost:3000/weather?address='+searchTerm.value).then(res => {
    res.json().then((data) => {
        if(data.error) {
            msg1.textContent = data.error;
        } else {
            msg1.textContent = data.location;
            msg2.textContent = data.forecast;
        }
    })
})
})
