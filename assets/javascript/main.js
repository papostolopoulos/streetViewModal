console.log("It is connected");

var buttonCoordinates = document.getElementById("buttonCoordinates");
var inputCoordinates = document.getElementById("inputCoordinates");
var divIdModal = document.getElementById("divIdModal");
var spanIdModalClose = document.getElementById("spanIdModalClose");

//Display the modal when clicking on the button
buttonCoordinates.addEventListener("click", function() {
  var valueCoordinates = inputCoordinates.value;
  divIdModal.style.display = "block";
});

//Close the modal window when clicking around it
window.addEventListener("click", function() {
  if (event.target === divIdModal) {
    divIdModal.style.display = "none";
  }
});

//Close the modal window when clicking on the x
spanIdModalClose.addEventListener("click", function() {
  divIdModal.style.display = "none";
});
