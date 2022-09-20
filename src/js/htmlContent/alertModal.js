console.log("alert modalalllll")


const mainSection = document.querySelector('#mainSection');
mainSection.insertAdjacentHTML('beforeend', `                                      

    <!-- your HTML goes here -->                                                         
<div id="myModal" class="modalAlert">

  <!-- Modal content -->
  <div class="modal-content-alert modal-content">
    <span class="closeAlert spanAlert close">
    <button class="closeBtn">close window</button>
</span>
    <p class="alert">Alert...
   
   
    </p>
     <span class="alertText">
    
     You clicked 5 times 
    <br>
    
    counter will reset
</span>
  </div>

</div>                                                                    
`);