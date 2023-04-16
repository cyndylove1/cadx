
var pagebody=document.querySelector(".pagebody")

var hamburger=document.querySelector(".hamburger-container")
  
function addandremove(){
   hamburger.classList.toggle('showburger')
}
var mobilecontainer=document.querySelector(".mobile-container")

function addandremove(){
   hamburger.classList.toggle('showburger')
   mobilecontainer.classList.toggle('showmobilelinks')
}
const sr = ScrollReveal ({
   distance: '60px',
   duration: 2000,
   reset: true

})
sr.reveal('.about,.about-text h2,.about-text p,.serivces,.service-items',{delay:350, origin:'bottom'})


      
        