// This is an example comment
var gallery = [];
var exerciseStatus = [];
var sizeOfGallery;
var exerciseNames = ['Lesson 1, Exercise A', 'Lesson 1, Exercise B', 'Lesson 1, Exercise C', 'Lesson 1, Exercise D',
'Lesson 2, Exercise A', 'Lesson 2, Exercise B', 'Lesson 2, Exercise C', 'Lesson 2, Exercise D',
'Lesson 3, Exercise A', 'Lesson 3, Exercise B', 'Lesson 3, Exercise C', 'Lesson 3, Exercise D',
'Lesson 4, Exercise A', 'Lesson 4, Exercise B', 'Lesson 4, Exercise C', 'Lesson 4, Exercise D',
'Lesson 5, Exercise A', 'Lesson 5, Exercise B', 'Lesson 5, Exercise C', 'Lesson 5, Exercise D', "Free Draw"]

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
      galleryImages += "<div class='galleryitem'><b>Drawing " + i + ": </b>" + exerciseNames[localStorage.getItem(i + "EXE")] + "<br/>" + localStorage.getItem(i + "SVG") + "</div>" ;
    }
    if (document.getElementById('gallerySize') !== null) {
      document.getElementById("gallerySize").innerHTML = sizeOfGallery;
    }
    if (document.getElementById('gallery') !== null) {
      document.getElementById("gallery").innerHTML = galleryImages;
    }
}

function exerciseName(num) {
    switch(num) {
      case 0:
        exName = "";
      case 1:
        exName = "";       
      case 2:
        exName = ""; 
      case 3:
        exName = ""; 
      case 4:
        exName = ""; 
      case 5:
        exName = ""; 
      case 6:
        exName = ""; 
      case 7:
        exName = ""; 
      case 8:
        exName = ""; 
      case 9:
        exName = ""; 
      case 10:
        exName = ""; 
      case 11:
        exName = ""; 

    }
}

function saveDrawing (drawingName) {
  exerName = drawingName + "EXE";
  localStorage.setItem(exerName, exercise);
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

function update(jscolor) {
      // 'jscolor' instance can be used as a string
      console.log(document.getElementById('drawing-color').value);
      document.getElementById('drawing-color').value = '#' + jscolor
  }
}