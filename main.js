
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
sr.reveal('.main-text', {delay:350, origin:'top'})

sr.reveal('.about-img,.about-text,.serivces,.service-text,.service-items,.footers', {delay:350, origin:'bottom'})


      
        