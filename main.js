Webcam.set({
    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach(camera);
function take_snapshot(){
    Webcam.snap(
        function (camera_image){
            document.getElementById("result").innerHTML = '<img id = "capture_image" src="'+camera_image+'"/>';
        }
    )
}

console.log('ml5 version:', ml5.version);

model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VMMpyybE-/model.json", modelLoaded);

function modelLoaded(){
    console.log("model is load");
}

function check() {
    img = document.getElementById("capture_image");
    model.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }

}