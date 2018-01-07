// This is an example comment
var gallery = [];
var exerciseStatus = [];
var sizeOfGallery;

function setExerciseStatus(callback) {
  exerciseStatus = JSON.parse(localStorage.getItem("exerciseStatus"));
  if(exerciseStatus==null || exerciseStatus==undefined) { 
    localStorage.setItem("exerciseStatus", "[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]");
    exerciseStatus=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  }
  callback();
}

function updateStatusMarkers() {
  var img = [];
  for(i=0;i<20;i++) {
    var imgID = "status" + i;
    img[i] = document.getElementById(imgID);
    console.log(i, "=", exerciseStatus[i])
    if(img[i]!=null) {
       if (exerciseStatus[i]==1) document.getElementById(imgID).src = "images/Check.svg";
    }

  }
}

function setGallery(callback) {
  sizeOfGallery = localStorage.getItem("sizeOfGallery");
  if(sizeOfGallery==null || sizeOfGallery==undefined) { 
    localStorage.setItem("sizeOfGallery", "0");
    sizeOfGallery=0;
  }
  callback(sizeOfGallery);
}

function populateGallery(gallerySize) {
    gallerySize++;
    var galleryImages = '';
    for (i = 1; i < gallerySize; i++) { 
      galleryImages += localStorage.getItem(i + "SVG") + "<br/>";
    }
    document.getElementById("gallery").innerHTML = galleryImages;
}


function saveDrawing (drawingName) {
  var drawJSON = JSON.stringify(canvas.toJSON());
  localStorage.setItem(drawingName, drawJSON);
}

function displayDrawing (drawingName) {
  var drawJSON = localStorage.getItem(drawingName);
  canvas.loadFromJSON(drawJSON, canvas.renderAll.bind(canvas), function(o, object) {
    fabric.log(o, object);
  });
}

function saveSVG (drawingName) {
  var drawSVG = canvas.toSVG({suppressPreamble:true});
  localStorage.setItem(drawingName, drawSVG);
}

function markComplete (exercise) {
  var exerciseArray = JSON.parse(localStorage.getItem("exerciseStatus"));
    exerciseArray[exercise]=1;
    localStorage.setItem("exerciseStatus",JSON.stringify(exerciseArray));
    exerciseStatus = exerciseArray;
}