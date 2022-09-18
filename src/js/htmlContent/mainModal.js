console.log("mainModal")

const mainModal = document.querySelector('#mainModal');
mainSection.insertAdjacentHTML('beforeend', `                                      

    <!-- your HTML goes here -->    
             <!-- Trigger/Open The Modal -->
<button id="myBtn">Open Modal</button>


<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
    <p class="showCounter"></p>
  </div>

</div>                  
                                                                                
`);