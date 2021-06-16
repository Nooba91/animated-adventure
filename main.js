classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/u8EmiANoQ/model.json", modelLoaded);
function modelLoaded(){
    console.log("All Is Clear!");
}
console.log(ml5.version);
Webcam.set({
    width:250,
    height:250,
    image_format:'png',
    png_quality:100
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = "<img id='snapshot' src='" + data_uri + "'/>";
    });
}
