const cards = document.querySelectorAll(".card-inner");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

//You can see full tutorial here
//https://www.ricardomoreira.io/blog/2020-06-15-flip-cards-with-javascript


// ---------------------------------------------
// This is the resume modal 
// ---------------------------------------------

let modalIndex = 0;

// declare the default html
let modalHTML = `<h4>Sihot Asia Pacific</h4>
    <em>Software Support Specialist</em>
    <em>2011 - 2020</em>
    <ul>
        <li>Support users with Sihot PMS software via phone, email and remote assistance.</li>
        <li>Write User Guides / How To’s / Video instructions.</li>
        <li>Write internal support documentation for both technical / non-technical users.</li>
        <li>Design e-learning training using Articulate Storyline 2.</li>
        <li><a href="https://www.youtube.com/channel/UC7BTiq5ccUk5v2U7lUmVi7w" target="blank">Produce YouTube Videos</a></li>
        <li>Design / Build a knowledge base</li>
        <li>Troubleshoot interfaces such as MPI, Saflok, Mittel, Vingcard, Docomo, Micros.</li>
        <li>Design custom .rtf layouts.</li>
        <li>Write LUA scripts.</li>
        <li>Software Testing.</li>
        <li>Collaborate with internal support teams and external vendors.</li>
        <li>Rotating on-call after hours support.</li>
    </ul>`;

// function to show / hide the modal
//@ param this is the index number of the modal to display
//@ param is the innerHTML to write for that model
function displayModal(html) {
  modalBody.classList.remove("hideModal");
  modalBody.classList.add("showModal");
  modalBody.innerHTML = html;
  }



const modal = document.getElementById("resume-modal");
const dot = document.querySelector(".dot");
const closeModal = document.querySelector(".close");
const notifications = document.querySelector("#notifications");

// Get the button that opens the modal
const btn = document.querySelector("#resume-modal-button");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

  btn.addEventListener('click', e => {
  // let index = modal.getAttribute('data-index');
  // modalIndex = index;
  modal.style.display = "flex";
  displayModal(modalHTML)
  });
  
console.log(modalIndex);


// When the user clicks on <span> (x), close the modal
closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




// ====================================================================
//  ---- Modal Cycle  ---- 
// ====================================================================
const rightArrow = document.querySelector(".right");
const leftArrow = document.querySelector(".left");
const sihot = document.querySelector(".sihot");
const ibm = document.querySelector(".ibm");
const modalBody = document.querySelector(".modal-body");


let rightCount = 0;
// when the right arrow in the modal is clicked
rightArrow.addEventListener('click', e => {
  if (rightCount === 0) {
    rightCount = 1;
    modalHTML = `    <h4>IBM</h4>
                        <em>Remote Technical Support</em>
                        <em>2007 - 2011</em>
                        <ul>
                            <li>Support users of the National Australia Bank on technical issues via phone, email and remote assistance.</li>
                            <li>Install and remove software via active directory.</li>
                            <li>WTroubleshoot software issues.</li>
                            <li>Queue management.</li>
                            <li>Provide printer support.</a></li>
                            <li>Rebuild computers.</li>
                            <li>Collaborate with internal support teams and external vendors.</li>
                        </ul>
    `;
    displayModal(modalHTML);

  } else if (rightCount === 1) {
    rightCount = 2;
    modalHTML = `<h4>Education</h4>
    <div class="education-container">
            <div class="education-institute">
            <em>Amazon</em>
            </div>
            <div class="education-text">
            <p>AWS Certified Cloud Practitioner</p>
            </div>
            <p>2020</p>            
   </div>
   <div class="education-container">
            <div class="education-institute">
            <em>Upskilled</em>
            </div>
            <div class="education-text">
            <p>Diploma of Website Development</p>
            </div>
            <p>2015</p>            
   </div>
   <div class="education-container">
   <div class="education-institute">
   <em>Upskilled</em>
   </div>
   <div class="education-text">
   <p>Diploma of Information Technology</p>
   </div>
   <p>2014</p>            
</div>
<div class="education-container">
<div class="education-institute">
<em>Photography Institute</em>
</div>
<div class="education-text">
<p>Diploma of Photography</p>
</div>
<p>2011</p>            
</div>
<div class="education-container">
<div class="education-institute">
<em>Australian College of Information Technology</em>
</div>
<div class="education-text">
<p>A+ Computer Technician</p>
</div>
<p>2004</p>            
</div>
<div class="education-container">
<div class="education-institute">
<em>Australian College of Information Technology</em>
</div>
<div class="education-text">
<p>N+ Networking</p>
</div>
<p>2004</p>            
</div>
    `;    
   displayModal(modalHTML);
  } else if (rightCount === 2) {
    rightCount = 0;    
    modalHTML = `<h4>Sihot Asia Pacific</h4>
    <em>Software Support Specialist</em>
    <em>2011 - 2020</em>
    <ul>
        <li>Support users with Sihot PMS software via phone, email and remote assistance.</li>
        <li>Write User Guides / How To’s / Video instructions.</li>
        <li>Write internal support documentation for both technical / non-technical users.</li>
        <li>Design e-learning training using Articulate Storyline 2.</li>
        <li><a href="https://www.youtube.com/channel/UC7BTiq5ccUk5v2U7lUmVi7w" target="blank">Produce YouTube Videos</a></li>
        <li>Design / Build a knowledge base</li>
        <li>Troubleshoot interfaces such as MPI, Saflok, Mittel, Vingcard, Docomo, Micros.</li>
        <li>Design custom .rtf layouts.</li>
        <li>Write LUA scripts.</li>
        <li>Software Testing.</li>
        <li>Collaborate with internal support teams and external vendors.</li>
        <li>Rotating on-call after hours support.</li>
    </ul>`;
    
    displayModal(modalHTML);
  }
  
});


let leftCount = 0;

// when the left arrow is clicked
leftArrow.addEventListener('click', e => {
  console.log(leftCount);
  
  if (leftCount === 0) {
    console.log("i equal 0");
    leftCount = 2;
    console.log(leftCount);
    modalHTML = `<h4>Education</h4>
    <div class="education-container">
            <div class="education-institute">
            <em>Amazon</em>
            </div>
            <div class="education-text">
            <p>AWS Certified Cloud Practitioner</p>
            </div>
            <p>2020</p>            
   </div>
   <div class="education-container">
            <div class="education-institute">
            <em>Upskilled</em>
            </div>
            <div class="education-text">
            <p>Diploma of Website Development</p>
            </div>
            <p>2015</p>            
   </div>
   <div class="education-container">
   <div class="education-institute">
   <em>Upskilled</em>
   </div>
   <div class="education-text">
   <p>Diploma of Information Technology</p>
   </div>
   <p>2014</p>            
</div>
<div class="education-container">
<div class="education-institute">
<em>Photography Institute</em>
</div>
<div class="education-text">
<p>Diploma of Photography</p>
</div>
<p>2011</p>            
</div>
<div class="education-container">
<div class="education-institute">
<em>Australian College of Information Technology</em>
</div>
<div class="education-text">
<p>A+ Computer Technician</p>
</div>
<p>2004</p>            
</div>
<div class="education-container">
<div class="education-institute">
<em>Australian College of Information Technology</em>
</div>
<div class="education-text">
<p>N+ Networking</p>
</div>
<p>2004</p>            
</div>
    `;    
    displayModal(modalHTML);

  } else if (leftCount === 2) {
    
    leftCount= 1;
    modalHTML = `    <h4>IBM</h4>
                        <em>Remote Technical Support</em>
                        <em>2007 - 2011</em>
                        <ul>
                            <li>Support users of the National Australia Bank on technical issues via phone, email and remote assistance.</li>
                            <li>Install and remove software via active directory.</li>
                            <li>WTroubleshoot software issues.</li>
                            <li>Queue management.</li>
                            <li>Provide printer support.</a></li>
                            <li>Rebuild computers.</li>
                            <li>Collaborate with internal support teams and external vendors.</li>
                        </ul>
    `;
    console.log(leftCount);
   displayModal(modalHTML);
  } else if (leftCount=== 1) {
    leftCount = 0;
    modalHTML = `<h4>Sihot Asia Pacific</h4>
    <em>Software Support Specialist</em>
    <em>2011 - 2020</em>
    <ul>
        <li>Support users with Sihot PMS software via phone, email and remote assistance.</li>
        <li>Write User Guides / How To’s / Video instructions.</li>
        <li>Write internal support documentation for both technical / non-technical users.</li>
        <li>Design e-learning training using Articulate Storyline 2.</li>
        <li><a href="https://www.youtube.com/channel/UC7BTiq5ccUk5v2U7lUmVi7w" target="blank">Produce YouTube Videos</a></li>
        <li>Design / Build a knowledge base</li>
        <li>Troubleshoot interfaces such as MPI, Saflok, Mittel, Vingcard, Docomo, Micros.</li>
        <li>Design custom .rtf layouts.</li>
        <li>Write LUA scripts.</li>
        <li>Software Testing.</li>
        <li>Collaborate with internal support teams and external vendors.</li>
        <li>Rotating on-call after hours support.</li>
    </ul>`;
    displayModal(modalHTML);
  }
  

});
