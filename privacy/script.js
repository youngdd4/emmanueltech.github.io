// Scroll to the top of the document when the button is clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the button when the user scrolls down 20px from the top
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  const scrollUpBtn = document.getElementById("scrollUpBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

// Go back to the previous page
function goBack() {
  window.history.back();
}
