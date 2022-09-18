import "/src/js/htmlContent/mainSection.js"
import "/src/js/htmlContent/mainModal.js"





// Get the modal
let modal = document.querySelector(".modal")
let showCounter = document.querySelector(".showCounter")



// Get the button that opens the modal
let btn = document.getElementById("myBtn");
console.log("show")
console.log(btn)

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// let counter = 0
let counter = "0"



btn.onclick = function() {
    // console.log("otworz modal")
    modal.style.display = "block";
    counter++

    console.log(counter)

    localStorage.setItem("someVarKey", counter);

    showCounter.textContent = `liczba kliniec to ${counter}`
}
counter = localStorage.getItem("someVarKey");



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}