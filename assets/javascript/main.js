console.log("It is connected");

var buttonCoordinates = document.getElementById("buttonCoordinates");
var inputCoordinates = document.getElementById("inputCoordinates");
var divIdModal = document.getElementById("divIdModal");
var spanIdModalClose = document.getElementById("spanIdModalClose");
var imgIdModalPhoto = document.getElementById("imgIdModalPhoto");
var imageAttributes = {
  lat: 40.720032,
  lon: -73.988354,
  fov: 90,
  heading: 235,
  pitch: 10
};


//DISPLAY MODAL ON CLICK OF SUBMIT BUTTON
buttonCoordinates.onclick = ()=>{
  var coordinatesArr = inputCoordinates.value.split(",");
  imageAttributes.lat = coordinatesArr[0].trim();
  imageAttributes.lon = coordinatesArr[1].trim();

  imgIdModalPhoto.src = `https://maps.googleapis.com/maps/api/streetview?size=800x800
  &location=${imageAttributes.lat},${imageAttributes.lon}
  &fov=${imageAttributes.fov}
  &heading=${imageAttributes.heading}
  &pitch=${imageAttributes.pitch}`.match(/\S/g).join('');
  divIdModal.style.display = "block";
  console.log(imgIdModalPhoto.src);
};


//CLOSE MODAL WINDOW WHEN CLICKING AROUND CONTENT
window.onclick = ()=>{
  if (event.target === divIdModal) divIdModal.style.display = "none";
};

//CLOSE MODAL WINDOW WHEN CLICKING ON X
spanIdModalClose.onclick = () => divIdModal.style.display = "none";


window.onkeydown = (event)=>{
  console.log(event);
  console.log(event.key);
  if (event.key === "ArrowRight") imageAttributes.heading += 5;
  if (event.key === "ArrowRight") imageAttributes.heading -= 5;
  if (event.key === "ArrowUp") imageAttributes.pitch += 5;
  if (event.key === "ArrowDown") imageAttributes.pitch -= 5;

  imgIdModalPhoto.src = `https://maps.googleapis.com/maps/api/streetview?size=800x800
  &location=${imageAttributes.lat},${imageAttributes.lon}
  &fov=${imageAttributes.fov}
  &heading=${imageAttributes.heading}
  &pitch=${imageAttributes.pitch}`.match(/\S/g).join('');
  console.log(imgIdModalPhoto.src);  
};
/*https://maps.googleapis.com/maps/api/streetview?size=800x800&location=40.720032,-73.988354
&fov=90&heading=235&pitch=10 */
