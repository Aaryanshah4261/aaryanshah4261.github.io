var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page-content").style.display = "block";
}

// JavaScript to handle modal popup
function openModal(projectId) {
  document.getElementById(projectId + '-modal').style.display = "block";
}

function closeModal(projectId) {
  document.getElementById(projectId + '-modal').style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
}
