
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}




window.onscroll = () => {

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 60) {
    document.querySelector('#scroll-top').classList.add('active');
  } else {
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fadeout');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();
const Name = document.getElementById('PartnerName');
$('img').mousedown(function (e) {
  if (e.button == 2) { // right click
    return false; // do nothing!
  }
});

function loadNewModel(ModelName1, ModelName2) {
  localStorage.setItem("ModelName1", ModelName1);
  localStorage.setItem("ModelName2", ModelName2);
  document.getElementById("Mini waffle").href = "index2.html";
}

function validateForm(form) {
  let x = document.forms["myForm"]["Name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["myForm"]["Number"].value;
  if (y == "" || y.length <= 9) {
    alert("Please enter full number");
    return false;
  }
  let z = document.forms["myForm"]["Rating"].value;
  if (z <= 0 || z == "") {
    alert("Please Give Rating");
    return false;
  }
  else SubForm();
}

function GoBack() {
  history.back();
}

var x = document.getElementById("videoToPlay");
document.onload = playVid();
function playVid() {

  document.addEventListener('contextmenu', event => event.preventDefault());
  x.play();

}


String.prototype.toProperCase = function () { return this.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }); };

window.addEventListener("load", function () {
  // uncomment next line
  // const url = new URL(location.href)
  // delete next line
  const url = new URL(location.href);
  //const url = new URL("http://127.0.0.1:5500/index.html?PartnerName=Fiza+Shaikh#order");
  let naam = url.searchParams.get("PartnerName")

  naam = naam ? naam.toProperCase() : "";
  if (typeof (Storage) !== "undefined") {
    // Store
    localStorage.setItem("PartnerName", naam);
    // Retrieve
    document.getElementById("PartnerName").innerHTML = localStorage.getItem("PartnerName");
  }
  const temp = '';
  if (naam != '') {
    Name.value = naam;
    temp = naam;
  }
  else if (temp != '') {

    Name.setAttribute(value) = temp;
  }
  else {
    if (Name != null) {
      Name.setAttribute(value) = 'Store Partner Name';
    }
  }
})

preventLongPressMenu(document.getElementsByTagName('img'));

function preventLongPressMenu(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].ontouchstart = absorbEvent_;
    nodes[i].ontouchmove = absorbEvent_;
    nodes[i].ontouchend = absorbEvent_;
    nodes[i].ontouchcancel = absorbEvent_;
  }
}







//Testing


// Slider(all Slides in a container)
const slider = document.querySelector(".slider")
// All trails 
const trail = document.querySelector(".trail").querySelectorAll("div")

// Transform value
let value = 0
// trail index number
let trailValue = 0
// interval (Duration)
let interval = 4000

// Function to slide forward
const slide = (condition) => {
  // CLear interval
  clearInterval(start)
  // update value and trailValue
  condition === "increase" ? initiateINC() : initiateDEC()
  // move slide
  move(value, trailValue)
  // Restart Animation
  animate()
  // start interal for slides back 
  start = setInterval(() => slide("increase"), interval);
}

// function for increase(forward, next) configuration
const initiateINC = () => {
  // Remove active from all trails
  trail.forEach(cur => cur.classList.remove("active"))
  // increase transform value
  value === 80 ? value = 0 : value += 20
  // update trailValue based on value
  trailUpdate()
}

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
  // Remove active from all trails
  trail.forEach(cur => cur.classList.remove("active"))
  // decrease transform value
  value === 0 ? value = 80 : value -= 20
  // update trailValue based on value
  trailUpdate()
}

// function to transform slide 
const move = (S, T) => {
  // transform slider
  slider.style.transform = `translateX(-${S}%)`
  //add active class to the current trail
  trail[T].classList.add("active")
}

const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.inOut" } })
tl.from(".bg", { x: "-100%", opacity: 0 })
  .from("p", { opacity: 0 }, "-=0.3")
  .from("h1", { opacity: 0, y: "30px" }, "-=0.3")
  .from("button", { opacity: 0, y: "-40px" }, "-=0.8")

// function to restart animation
const animate = () => tl.restart()

// function to update trailValue based on slide value
const trailUpdate = () => {
  if (value === 0) {
    trailValue = 0
  } else if (value === 20) {
    trailValue = 1
  } else if (value === 40) {
    trailValue = 2
  } else if (value === 60) {
    trailValue = 3
  } else {
    trailValue = 4
  }
}

// Start interval for slides
let start = setInterval(() => slide("increase"), interval)

// Next  and  Previous button function (SVG icon with different classes)
document.querySelectorAll("svg").forEach(cur => {
  // Assign function based on the class Name("next" and "prev")
  cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
})

// function to slide when trail is clicked
const clickCheck = (e) => {
  // CLear interval
  clearInterval(start)
  // remove active class from all trails
  trail.forEach(cur => cur.classList.remove("active"))
  // Get selected trail
  const check = e.target
  // add active class
  check.classList.add("active")

  // Update slide value based on the selected trail
  if (check.classList.contains("box1")) {
    value = 0
  } else if (check.classList.contains("box2")) {
    value = 20
  } else if (check.classList.contains("box3")) {
    value = 40
  } else if (check.classList.contains("box4")) {
    value = 60
  } else {
    value = 80
  }
  // update trail based on value
  trailUpdate()
  // transfrom slide
  move(value, trailValue)
  // start animation
  animate()
  // start interval
  start = setInterval(() => slide("increase"), interval)
}

// Add function to all trails
trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

// Mobile touch Slide Section
const touchSlide = (() => {
  let start, move, change, sliderWidth

  // Do this on initial touch on screen
  slider.addEventListener("touchstart", (e) => {
    // get the touche position of X on the screen
    start = e.touches[0].clientX
    // (each slide with) the width of the slider container divided by the number of slides
    sliderWidth = slider.clientWidth / trail.length
  })

  // Do this on touchDrag on screen
  slider.addEventListener("touchmove", (e) => {
    // prevent default function
    e.preventDefault()
    // get the touche position of X on the screen when dragging stops
    move = e.touches[0].clientX
    // Subtract initial position from end position and save to change variabla
    change = start - move
  })

  const mobile = (e) => {
    // if change is greater than a quarter of sliderWidth, next else Do NOTHING
    change > (sliderWidth / 4) ? slide("increase") : null;
    // if change * -1 is greater than a quarter of sliderWidth, prev else Do NOTHING
    (change * -1) > (sliderWidth / 4) ? slide("decrease") : null;
    // reset all variable to 0
    [start, move, change, sliderWidth] = [0, 0, 0, 0]
  }
  // call mobile on touch end
  slider.addEventListener("touchend", mobile)
})()






document.onkeydown = function (e) {
  if (e.key == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'I'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'J'.charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.key == 'U'.charCodeAt(0)) {
    return false;
  }
}




jQuery(function ($) {
  var ssb_panel = $('#ssb-container'), ssb_panel_w = ssb_panel.width(), sbb_display_margin = 50, window_width = jQuery(window).width(); ssb_panel.css('z-index', ssb_ui_data.z_index); if (ssb_panel.hasClass('ssb-btns-left') && (ssb_panel.hasClass('ssb-anim-slide') || ssb_panel.hasClass('ssb-anim-icons'))) { ssb_panel.css('left', '-' + (ssb_panel_w - sbb_display_margin) + 'px'); } else if (ssb_panel.hasClass('ssb-btns-right') && (ssb_panel.hasClass('ssb-anim-slide') || ssb_panel.hasClass('ssb-anim-icons'))) { ssb_panel.css('right', '-' + (ssb_panel_w - sbb_display_margin) + 'px'); }
  if (window_width >= 768) { ssb_panel.hover(function () { if (ssb_panel.hasClass('ssb-btns-left') && ssb_panel.hasClass('ssb-anim-slide')) { ssb_panel.stop().animate({ 'left': 0 }, 300); } else if (ssb_panel.hasClass('ssb-btns-right') && ssb_panel.hasClass('ssb-anim-slide')) { ssb_panel.stop().animate({ 'right': 0 }, 300); } }, function () { if (ssb_panel.hasClass('ssb-btns-left') && ssb_panel.hasClass('ssb-anim-slide')) { ssb_panel.animate({ 'left': '-' + (ssb_panel_w - sbb_display_margin) + 'px' }, 300); } else if (ssb_panel.hasClass('ssb-btns-right') && ssb_panel.hasClass('ssb-anim-slide')) { ssb_panel.animate({ 'right': '-' + (ssb_panel_w - sbb_display_margin) + 'px' }, 300); } }); } else { ssb_panel.click(function (e) { if (jQuery(this).hasClass('ssb-open')) { jQuery(this).removeClass('ssb-open'); if (ssb_panel.hasClass('ssb-btns-left') && ssb_panel.hasClass('ssb-anim-slide')) { ssb_panel.animate({ 'left': '-' + (ssb_panel_w - sbb_display_margin) + 'px' }, 300); } else if (ssb_panel.hasClass('ssb-btns-right') && ssb_panel.hasClass('ssb-anim-slide')) { ssb_panel.animate({ 'right': '-' + (ssb_panel_w - sbb_display_margin) + 'px' }, 300); } } else { e.preventDefault(); jQuery(this).addClass('ssb-open'); if (ssb_panel.hasClass('ssb-btns-left') && ssb_panel.hasClass('ssb-anim-slide')) { ssb_panel.stop().animate({ 'left': 0 }, 300); } else if (ssb_panel.hasClass('ssb-btns-right') && ssb_panel.hasClass('ssb-anim-slide')) { ssb_panel.stop().animate({ 'right': 0 }, 300); } } }); }
});



function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}



/* Demo purposes only */
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);