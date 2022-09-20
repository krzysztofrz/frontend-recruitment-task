import "/src/js/htmlContent/mainSection.js"
import "/src/js/htmlContent/mainModal.js"
import "/src/js/htmlContent/alertModal.js"



// Get the modal
let modal = document.querySelector(".modal")
let showCounter = document.querySelector(".showCounter")

// Get the button that opens the modal
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let closeAlert = document.getElementsByClassName("closeAlert")[0];
let counter = "0"
const mainAlert = document.querySelector(".modalAlert")

btn.onclick = function() {
    modal.style.display = "block";
    counter++
    localStorage.setItem("someVarKey", counter);

    let times;

    showCounter.textContent = `You clicked ${counter} ${counter == 1 ? times = "time" : times = "times" } `

    if (counter >= 5){
        console.log(mainAlert)
        mainAlert.style.display = "block"
        counter = 0;
        modal.style.display = "none";
    }
}
counter = localStorage.getItem("someVarKey");




    //alert modal
    // When the user clicks on <span> (x), close the modal
    closeAlert.onclick = function() {
        mainAlert.style.display = "none";
    }
// alert modal
// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === mainAlert) {
            mainAlert.style.display = "none";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
            mainAlert.style.display = "none";
        }

// When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
}}