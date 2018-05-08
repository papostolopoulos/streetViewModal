console.log("It is connected");

// LIST OF VARIABLES USED
var buttonCoordinates = document.getElementById("buttonCoordinates");
var inputCoordinates = document.getElementById("inputCoordinates");
var divIdModal = document.getElementById("divIdModal");
var spanIdModalClose = document.getElementById("spanIdModalClose");
var imgIdModalPhoto = document.getElementById("imgIdModalPhoto");
var imageSrc = {
  lat: 40.720032,
  lon: -73.988354,
  fov: 90,
  heading: 235,
  pitch: 10,
  url: function() {
    return `https://maps.googleapis.com/maps/api/streetview?size=800x800
    &location=${this.lat},${this.lon}
    &fov=${this.fov}
    &heading=${this.heading}
    &pitch=${this.pitch}`.match(/\S/g).join('');
  }
};


//DISPLAY MODAL ON CLICK OF SUBMIT BUTTON
buttonCoordinates.onclick = ()=>{
  var coordinatesArr = inputCoordinates.value.split(",");
  imageSrc.lat = coordinatesArr[0].trim();
  imageSrc.lon = coordinatesArr[1].trim();

  imgIdModalPhoto.src = imageSrc.url();

  divIdModal.style.display = "block";
  console.log(imgIdModalPhoto.src);
};


//CLOSE MODAL WINDOW WHEN CLICKING AROUND CONTENT
window.onclick = ()=>{
  if (event.target === divIdModal) divIdModal.style.display = "none";
};

//CLOSE MODAL WINDOW WHEN CLICKING ON X
spanIdModalClose.onclick = () => divIdModal.style.display = "none";

// CLOSE MODAL WINDOW WHEN HITTING ESCAPE



window.onkeydown = (event)=>{
  console.log(event);
  console.log(event.key);
  if (event.key === "ArrowRight") imageSrc.heading += 5;
  if (event.key === "ArrowLeft") imageSrc.heading -= 5;
  if (event.key === "ArrowUp") imageSrc.pitch += 5;
  if (event.key === "ArrowDown") imageSrc.pitch -= 5;
  if (event.key === "z") imageSrc.fov -= 5;
  if (event.key === "x") imageSrc.fov += 5;

  imgIdModalPhoto.src = imageSrc.url();

  // imgIdModalPhoto.src = `https://maps.googleapis.com/maps/api/streetview?size=800x800
  // &location=${imageSrc.lat},${imageSrc.lon}
  // &fov=${imageSrc.fov}
  // &heading=${imageSrc.heading}
  // &pitch=${imageSrc.pitch}`.match(/\S/g).join('');
  console.log(imgIdModalPhoto.src);
};
/*https://maps.googleapis.com/maps/api/streetview?size=800x800&location=40.720032,-73.988354
&fov=90&heading=235&pitch=10 */
