var amount = document.querySelectorAll(".amount");
var switch_toggle = document.getElementById('switch');

const display =()=>{
    amount.forEach(x => {
        x.classList.toggle("none");
    })
}

switch_toggle.addEventListener("click",display);