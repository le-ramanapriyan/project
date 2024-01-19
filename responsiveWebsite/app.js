let burger  = document.querySelector(".burger");
let links = document.querySelector(".nav-links");
let TextArea=document.querySelector(".text-center")
burger.addEventListener('click',()=> {
    links.classList.toggle ("nav-show");
    TextArea.classList.toggle("textareahide");
})