var isPanning = false;
var lastMouseX = 0;
var lastMouseY = 0;
var translateX = 0;
var translateY = 0;

var scale = 1.0;
var minScale = 0.5;
var maxScale = 2.0;
var step = 0.1;
var zoomInLimit = 1.4;
var zoomOutLimit = 0.3;

// Keep track of the current mouse position
var mouseX = 0;
var mouseY = 0;

function zoom(event) {
  event.preventDefault();
  var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
  var container = document.getElementById("container");
  var containerRect = container.getBoundingClientRect();
  
  // Update the mouse position
  mouseX = event.clientX - containerRect.left;
  mouseY = event.clientY - containerRect.top;
  
  if (delta < 0 && scale > zoomOutLimit) {
    scale -= step;
  } else if (delta > 0 && scale < maxScale && scale * (1 + step) < zoomInLimit) {
    scale += step;
  }
  
  // Adjust the transform origin based on the current mouse position
  container.style.transformOrigin = mouseX + "px " + mouseY + "px";
  container.style.transform = "scale(" + scale + ") translate(" + translateX + "px, " + translateY + "px)";
}

function panStart(event) {
  if (event.button === 2) {
    return;
  }
  isPanning = true;
  lastMouseX = event.clientX;
  lastMouseY = event.clientY;
}

function panMove(event) {
  if (isPanning) {
    var deltaX = event.clientX - lastMouseX;
    var deltaY = event.clientY - lastMouseY;
    translateX += deltaX;
    translateY += deltaY;
    var container = document.getElementById("container");
    container.style.transform = "scale(" + scale + ") translate(" + translateX + "px, " + translateY + "px)";
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
  }
}

function panEnd() {
  isPanning = false;
}

document.addEventListener("mousemove", panMove);
document.addEventListener("mousedown", panStart);
document.addEventListener("mouseup", panEnd);
document.addEventListener("mousewheel", zoom);
document.addEventListener("DOMMouseScroll", zoom); // for Firefox

window.onload = function() {
  window.scrollTo(0, 0);
};









const windowWidth = window.innerWidth;
const contentWidth = document.getElementById('container').offsetWidth;

const leftSpace = (windowWidth - contentWidth) / 0.037;

document.documentElement.scrollLeft = leftSpace;

function centerContent() {
    const windowWidth = window.innerWidth;
    const contentWidth = document.getElementById('container').offsetWidth;
    const leftSpace = (windowWidth - contentWidth) / 0.037;
    document.documentElement.scrollLeft = leftSpace;
  }
  
  window.onload = centerContent;
  








  const popupCircle = document.querySelector('.popup-circle');
const popupModal = document.querySelector('.popup-modal');
const popupCloseBtn = document.querySelector('.popup-close-btn');
const messageForm = document.querySelector('form');
const messageInput = document.querySelector('#message-input');
const messageDisplay = document.querySelector('#message-display');

popupCircle.addEventListener('click', () => {
  popupModal.style.display = 'block';
});

popupCloseBtn.addEventListener('click', () => {
  popupModal.style.display = 'none';
});

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  messageDisplay.textContent = messageInput.value;
  messageInput.value = '';
});







function openReviewMenu() {
    const popupCircles = document.querySelectorAll('.option-circle');
    const popupModalContent = document.querySelector('.popup-modal-content');

    popupCircles.forEach((circle) => {
    circle.addEventListener('click', () => {
        popupModalContent.innerHTML = '';
        popupModalContent.style.backgroundColor = 'white';
        popupModalContent.style.display = 'block';
    });
    });

    popupCloseBtn.addEventListener('click', () => {
    popupModal.style.display = 'none';
    });

    const reviewMenu = document.querySelector('.review-menu');
  reviewMenu.style.display = 'block';
  }
  
  function openCommentMenu() {
    // code to open comment menu pop-up
  }
  
  function openExtraMenu() {
    // code to open extra menu pop-up
  }
  
  function openFeedbackMenu() {
    // code to open feedback menu pop-up
  }
  
  function openCriticMenu() {
    // code to open critic menu pop-up
  }
  
  function closeReviewMenu() {
    const reviewMenu = document.querySelector('.review-menu');
    reviewMenu.style.display = 'none';
  }