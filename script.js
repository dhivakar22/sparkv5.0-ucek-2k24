var countDownDate = new Date("Sep 13, 2024 23:59:59").getTime()

var x = setInterval(function () {
  var now = new Date().getTime()

  var distance = countDownDate - now

  var days = Math.floor(distance / (1000 * 60 * 60 * 24))
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  document.getElementById("timer").innerHTML = `<div class="timer-item"> ${days} <span>Days</span></div> <span style="font-size:50px;" >|</span>
<div class="timer-item">${hours} <span>Hours</span></div> <span style="font-size:50px;" >|</span>
<div class="timer-item">${minutes} <span>Minutes</span></div> <span style="font-size:50px;" >|</span>
<div class="timer-item">${seconds} <span>Seconds</span></div>
`

  if (distance < 0) {
    clearInterval(x)
    document.getElementById("timer").innerHTML = "EXPIRED"
  }
}, 1000)

// showcase

function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll("section")
  sections.forEach(section => section.classList.remove("visible-section"))
  sections.forEach(section => section.classList.add("hidden-section"))

  // Show the clicked section
  const selectedSection = document.getElementById(sectionId)
  selectedSection.classList.remove("hidden-section")
  selectedSection.classList.add("visible-section")
}
