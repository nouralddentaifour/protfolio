const swiper=new Swiper(
  '.swiper'
  ,{loop:true,
  pagination:{el:".swiper-pagination",clickable:true,}
  ,slidesPerView:3,spaceBetween:30,freeMode:true,breakpoints:
  {320:{slidesPerView:1,spaceBetween:20},
  640:{slidesPerView:2,spaceBetween:40},
  991:{slidesPerView:3,spaceBetween:40}},
            navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
        scrollbar: {
      el: '.swiper-scrollbar',
    },
});
let about = document.querySelector(".about")
let project = document.querySelector(".project")
let contact = document.querySelector(".contact")
let butt = document.querySelector(".butt")
let ul = document.querySelector(".ul")
let span =document.createElement("span")
let h2 = document.querySelector(".contact h2")
let a = document.querySelectorAll(".contact .content a")
span.className = "close"
let text = document.createTextNode("close")
span.appendChild(text)
ul.appendChild(span)
butt.onclick = function () {
  ul.style.display = "block"
}
addEventListener("click" , (el) =>{
  if (el.target.className === "close") {
    ul.style.display = "none"
  }
})
addEventListener("click" , (el) =>{
  if (el.target.id === "moon") {
    localStorage.setItem("mood",el.target.id)
    document.body.style.backgroundColor="black"
    about.style.backgroundColor ="black"
    about.style.color ="#777"
    project.style.backgroundColor ="black"
    contact.style.backgroundColor ="black"
    a.forEach((a)=>{
      a.style.backgroundColor="#777"
    })
    h2.style.color="var(--main-color)"
  }
})
if(localStorage.getItem("mood") === "moon"){
  document.body.style.backgroundColor="black"
  about.style.backgroundColor ="black"
  about.style.color ="#777"
  project.style.backgroundColor ="black"
  contact.style.backgroundColor ="black"
  a.forEach((a)=>{
    a.style.backgroundColor="#777"
  })
  h2.style.color="var(--main-color)"
}
addEventListener("click" , (el) =>{
  if (el.target.id === "sun") {
    localStorage.setItem("mood",el.target.id)
    document.body.style.backgroundColor="white"
    about.style.backgroundColor ="#eeeeee8e"
    project.style.backgroundColor ="#eeeeee8e"
    contact.style.backgroundColor ="var(--main-color)"
    a.forEach((a)=>{
      a.style.backgroundColor="white"
    })
    h2.style.color="white"
  }
})
if(localStorage.getItem("mood") === "sun"){
  document.body.style.backgroundColor="white"
  about.style.backgroundColor ="#eeeeee8e"
  project.style.backgroundColor ="#eeeeee8e"
  contact.style.backgroundColor ="var(--main-color)"
  a.forEach((a)=>{
    a.style.backgroundColor="white"
  })
  h2.style.color="white"
}