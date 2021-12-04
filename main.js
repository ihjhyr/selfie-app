var speech_recognition = window.webkitSpeechRecognition;
var recognition = new speech_recognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content == "take my selfie"){
        speak();
        
    }
    
}
function speak() {
    var synth = window.speechSynthesis;
    //speak_data = document.getElementById("textbox").value;
    speak_data = "taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis); 
    Webcam.attach(camera);
    setTimeout(function()  {
        takesnapshot();
        save();
    }, 5000);
}
Webcam.set({
    width : 360,height : 250,
    image_format : "png", 
    png_quality : 0});
    camera = document.getElementById("camera");
function takesnapshot(){
    Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_url+'">';

    });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}