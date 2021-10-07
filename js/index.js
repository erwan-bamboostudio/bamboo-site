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
