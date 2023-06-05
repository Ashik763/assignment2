const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

const service1 = document.getElementById("service1");
const serviceLink11 = document.getElementById("service11-link");
const serviceLink1 = document.getElementById("service1-link");



const service2 = document.getElementById("service2");
const serviceLink22 = document.getElementById("service22-link");
const serviceLink2 = document.getElementById("service2-link");



const service3 = document.getElementById("service3");
const serviceLink33 = document.getElementById("service33-link");
const serviceLink3 = document.getElementById("service3-link");



const service4 = document.getElementById("service4");
const serviceLink44 = document.getElementById("service44-link");
const serviceLink4 = document.getElementById("service4-link");





navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
})
serviceLink1.addEventListener('click', function(){
    
    service1.classList.toggle("toggle-details");
})
serviceLink11.addEventListener('click', function(){
   
    service1.classList.toggle("toggle-details");
})


serviceLink2.addEventListener('click', function(){
    
    service2.classList.toggle("toggle-details");
})
serviceLink22.addEventListener('click', function(){
   
    service2.classList.toggle("toggle-details");
})


serviceLink3.addEventListener('click', function(){
    
    service3.classList.toggle("toggle-details");
})
serviceLink33.addEventListener('click', function(){
   
    service3.classList.toggle("toggle-details");
})



serviceLink4.addEventListener('click', function(){
    
    service4.classList.toggle("toggle-details");
})
serviceLink44.addEventListener('click', function(){
   
    service4.classList.toggle("toggle-details");
})

// Banner Annimation
var typed = new Typed(".banner-text",{
    strings:["rtificial Intelligence <span class='text-[#ff9c39]' > services</span>"],
    typedSpeed:10,
    backSpeed:150,
    loop:true
})