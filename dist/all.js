import"/src/js/htmlContent/mainSection.js";import"/src/js/htmlContent/mainModal.js";import"/src/js/htmlContent/alertModal.js";let modal=document.querySelector(".modal"),showCounter=document.querySelector(".showCounter"),btn=document.getElementById("myBtn"),span=document.getElementsByClassName("close")[0],closeAlert=document.getElementsByClassName("closeAlert")[0],counter="0";const mainAlert=document.querySelector(".modalAlert"),mainSection=(btn.onclick=function(){modal.style.display="block",counter++,localStorage.setItem("someVarKey",counter),showCounter.textContent=`You clicked ${counter} times`,5<=counter&&(console.log(mainAlert),mainAlert.style.display="block",counter=0,modal.style.display="none")},counter=localStorage.getItem("someVarKey"),closeAlert.onclick=function(){mainAlert.style.display="none"},window.onclick=function(e){e.target===mainAlert&&(mainAlert.style.display="none"),span.onclick=function(){modal.style.display="none",mainAlert.style.display="none"},window.onclick=function(e){e.target===modal&&(modal.style.display="none")}},console.log("alert modalalllll"),document.querySelector("#mainSection")),mainModal=(mainSection.insertAdjacentHTML("beforeend",`                                      

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
`),console.log("mainModal"),document.querySelector("#mainModal")),mainSection=(mainSection.insertAdjacentHTML("beforeend",`                                      

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