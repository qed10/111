function show(str) {
    if(str=='1'){
        document.getElementById("text1").className="chosen";
        document.getElementById("text2").className="";
     
        document.getElementById("content-dl1").style.display ="block";
        document.getElementById("content-dl2").style.display ="none";
        
    }
    if(str=='2'){
        document.getElementById("text2").className="chosen";
        document.getElementById("text1").className="";
        document.getElementById("content-dl1").style.display ="none";
        document.getElementById("content-dl2").style.display ="block";

    }
    // JavaScript Document