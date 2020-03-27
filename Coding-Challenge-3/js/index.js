function game() {
    let input = Number(document.querySelector(".fizzBuzzNumber").value);
    let results = document.querySelector(".resultsSection");
    results.innerHTML = "";
    for(let i = 1 ; i <= input; i++) {
        if( i % 3 === 0 ) {
            results.innerHTML += `<div class="fizz-buzz-item fizz"><span>fizz</span</div>`
        } else if ( i % 5 === 0) {
            results.innerHTML += `<div class="fizz-buzz-item buzz"><span>buzz</span></div>`
        } else {
            results.innerHTML += `<div class="fizz-buzz-item"><span>${i}</span></div>`
        }
    }

}

function watchForm() {
    let form = document.getElementById("fizzBuzzForm");
    form.addEventListener("submit", (ev) => {
        ev.preventDefault();
    });
}

function watchSubmit() {
    let submit = document.getElementById("submitBtn");
    submit.addEventListener("click", game);
}


function init() {
    watchForm();
    watchSubmit();
}

init()