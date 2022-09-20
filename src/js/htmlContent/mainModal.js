console.log("mainModal")

const mainModal = document.querySelector('#mainModal');
mainSection.insertAdjacentHTML('beforeend', `                                      

    <!-- your HTML goes here -->    
             <!-- Trigger/Open The Modal -->
 <div class="mainBtn">
    <button id="myBtn">Click me!</button>
</div>



<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p class="alert">Alert...</p>
    <p class="showCounter"></p>
  </div>

</div>                  
                                                                                
`);