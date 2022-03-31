prediction1="";
prediction2="";

Webcam.set({
width:300,
height:300,
image_format:'png',
png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach('#camera')

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("snap").innerHTML='<img id="captureimage" src="'+data_uri+'">';
    });
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/C5WWnwzOY/model.json',modelLoaded)

function modelLoaded(){
    console.log("Your model is loaded")
}
function speak()
{
    var symth=window.speechSynthesis;
    speek1="I know about your crimnal past so i will not tell you about your emotion so shhu."
    var utterthis=new SpeechSynthesisUtterance(speek1);
      symth.speak(utterthis)
}

function predict()
{
img=document.getElementById('captureimage')
classifier.classify(img,gotResult)
}

function gotResult(result)
{
    if(result>0){
document.getElementById("prediction1").innerHTML=result[0].label
document.getElementById("prediction2").innerHTML=result[1].label
prediction1=result[0].label
prediction2=result[1].label
speak()
    }

}



