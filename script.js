var typed = new Typed('#element',{
    strings:['HTML','CSS','JAVA SCRIPT','BOOTSTRAP','TAILWIND CSS','WEB DEVELOPER .'],
    typeSpeed: 60,
});


let filter = false;

function clicked(){
    if(filter ==false){
        var ele = document.getElementById("container1");
        ele.style.marginTop="20%";
        filter = true;
    }
    else{
        var ele = document.getElementById("container1");
        ele.style.marginTop="-70%";
        filter = false;
    }
}

