import"/src/js/htmlContent/mainSection.js";import"/src/js/htmlContent/mainModal.js";let modal=document.querySelector(".modal"),showCounter=document.querySelector(".showCounter"),btn=document.getElementById("myBtn"),span=(console.log("show"),console.log(btn),document.getElementsByClassName("close")[0]),counter="0";btn.onclick=function(){modal.style.display="block",counter++,console.log(counter),localStorage.setItem("someVarKey",counter),showCounter.textContent="liczba kliniec to "+counter},counter=localStorage.getItem("someVarKey"),span.onclick=function(){modal.style.display="none"},window.onclick=function(e){e.target==modal&&(modal.style.display="none")},console.log("mainModal");const mainModal=document.querySelector("#mainModal"),mainSection=(mainSection.insertAdjacentHTML("beforeend",`                                      

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
                                                                                
`),document.querySelector("#mainSection"));mainSection.insertAdjacentHTML("beforeend",`                                      

    <!-- your HTML goes here -->                                                         
 <section class="section">
    <main class="main">
        <div class="sectionImg">
            <img src="../../../images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg" alt="sunset on the beach">
        </div>
        <div class="sectionContent">
            <h1 class="contentTitle">Lorem Ipsunm2</h1>
            <p class="contentText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, atque eos esse fugit obcaecati pariatur porro quibusdam repudiandae temporibus voluptatibus.</p>
<!--            <button class="btn contentButton" id="mainModal">Button</button>-->
        </div>
    </main>  
</section>                                     
                                                                                
`);