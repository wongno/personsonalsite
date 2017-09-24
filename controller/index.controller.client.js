// function animation() {
//    $(".nw-eyelid").attr("src","images/eyelid2.png");
//
// }

//var id = setInterval(frame, 5);
var counter = 2;
function frame() {
    if (counter===8) {
        clearInterval(id);
    } else {
        $(".nw-eyelid").attr("src","images/eyelid"+counter+".png");
        counter ++;
        /* code to change the element style */
    }
}

function initial() {
    var pupil = document.getElementById("pupil");
    var w = pupil.clientWidth;
  $(".nw-pupil").css("left",(window.innerWidth/2)-w/2);
}

function eyeMovement(event) {
if(event){
    var pupil = document.getElementById("pupil");
    var w = pupil.clientWidth;
    if(event.clientY.valueOf() + w/2> 145 && event.clientY.valueOf() + w/2< 210) {
        console.log(event.clientY.valueOf());
        console.log(event.clientX.valueOf());

        $(".nw-pupil").css("top", event.clientY.valueOf() - w / 2);
    }
    var mid = window.innerWidth/2;
    if(event.clientX.valueOf()+w/2> mid && event.clientX.valueOf()+w/2< mid+83){
        $(".nw-pupil").css("left", event.clientX.valueOf()-w/2);
    }
    }
}
