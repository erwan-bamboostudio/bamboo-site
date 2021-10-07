$(".proj1 img").hover(function () {
  $(".proj1").toggleClass("hover")
})

$(".proj2 img").hover(function () {
  $(".proj2").toggleClass("hover")
})

$(".proj3 img").hover(function () {
  $(".proj3").toggleClass("hover")
})

$(".proj4 img").hover(function () {
  $(".proj4").toggleClass("hover")
})

$(".project1 img").hover(function () {
  $(".project1").toggleClass("hover-work")
})

$(".project2 img").hover(function () {
  $(".project2").toggleClass("hover-work")
})

$(".project3 img").hover(function () {
  $(".project3").toggleClass("hover-work")
})

$(".project4 img").hover(function () {
  $(".project4").toggleClass("hover-work")
})

$(".project5 img").hover(function () {
  $(".project5").toggleClass("hover-work")
})

$(".project6 img").hover(function () {
  $(".project6").toggleClass("hover-work")
})

$(".nav-contact a").on("click", function (e) {
  $(".contact").toggleClass("visible")
  $("body").toggleClass("overflow-0")
  e.preventDefault()
})

$(".close-icon").on("click", function (e) {
  $(".contact").toggleClass("visible")
  $("body").toggleClass("overflow-0")
  e.preventDefault()
})

var acc = document.getElementsByClassName("accordion")
var i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active")
    var panel = this.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"
    }
  })
}

$("button.btn1").on("click", function (e) {
  $(".panel1").toggleClass("fit-content pad-2")
  e.preventDefault()
})

$("button.btn2").on("click", function (e) {
  $(".panel2").toggleClass("fit-content pad-2")
  e.preventDefault()
})

$("button.btn3").on("click", function (e) {
  $(".panel3").toggleClass("fit-content pad-2")
  e.preventDefault()
})

$("button.btn4").on("click", function (e) {
  $(".panel4").toggleClass("fit-content pad-2")
  e.preventDefault()
})

$("button.btn5").on("click", function (e) {
  $(".panel5").toggleClass("fit-content pad-2")
  e.preventDefault()
})
