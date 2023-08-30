const check = document.getElementById('checkbox1');

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "dark");
}

let localData = localStorage.getItem("theme"); 

if (localData == "dark") {
    document.body.classList.remove("light-theme");
}

else if(localData == "light") {
    document.body.classList.add("light-theme");
}

check.addEventListener('change', (e) => {
    document.body.classList.toggle("light-theme");

    let checkboxValue = e.target.checked ? 'on' : 'off';

    if(checkboxValue == true) {
        localStorage.setItem("theme", "light");
    } 

    if(checkboxValue == false) {
        localStorage.setItem("theme", "dark");
    }
})