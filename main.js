
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
const optionMenu = document.querySelector(".select-menu"),
      selectBtn = optionMenu.querySelector(".select-btn"),
      options = optionMenu.querySelector(".option"),
      sBtn_text = optionMenu.querySelector(".sBtn-text");

      options.forEach(option =>{
         option.addEventListner("click",() =>{
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            console.log(selectedOption)


         })
})            

      
        