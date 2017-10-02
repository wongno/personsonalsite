var counter = 2;
function part1() {
    if(counter === 7){
        $(".nw-eyelid").attr("src","images/eyelid"+(counter-6)+".png");
        counter =2;
    }else{
        $(".nw-eyelid").attr("src","images/eyelid"+counter+".png");
        counter++;
        window.setTimeout(part2,50);
    }
}
function part2() {
    if(counter === 7){
        $(".nw-eyelid").attr("src","images/eyelid"+(counter-4)+".png");
        window.setTimeout(part1,50);
    }else{
        $(".nw-eyelid").attr("src","images/eyelid"+counter+".png");
        counter++;
        window.setTimeout(part3,50);
    }
}
function part3() {
    if(counter === 7){
        $(".nw-eyelid").attr("src","images/eyelid"+(counter-3)+".png");
        window.setTimeout(part2,50);
    } else{
        $(".nw-eyelid").attr("src","images/eyelid"+counter+".png");
        counter++;
        window.setTimeout(part4,50);
    }
}
function part4() {
    if(counter === 7){
        $(".nw-eyelid").attr("src","images/eyelid"+(counter-2)+".png");
        window.setTimeout(part3,50);
    } else{
        $(".nw-eyelid").attr("src","images/eyelid"+counter+".png");
        counter++;
        window.setTimeout(part5,50);
    }
}
function part5() {
    if(counter === 7){
        $(".nw-eyelid").attr("src","images/eyelid"+(counter-1)+".png");
        window.setTimeout(part4,50);

    }else{
        $(".nw-eyelid").attr("src","images/eyelid"+counter+".png");
        counter++;
        window.setTimeout(part6,50);
    }
}
function part6() {
    $(".nw-eyelid").attr("src","images/eyelid"+counter+".png");
    window.setTimeout(part5,300);
}
function frame() {
        for(var i = 0; i < 21001; i ++){
            if(i%3000 === 0){
                if (counter===8) {
                    //clearInterval(id);
                    counter = 1;
                } else {
                    $(".nw-eyelid").attr("src","images/eyelid"+counter+".png");
                    counter ++;
                }
            }
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
    var positionl = $(".nw-eyelid").offset();


    var positionr = $(".nw-eyelid2").position();
    if(event.clientY.valueOf() + w/2> 145 && event.clientY.valueOf() + w/2< 210) {
        $(".nw-pupil").css("top", event.clientY.valueOf() - w / 2);
     //   $(".nw-pupil2").css("top", event.clientY.valueOf() - w / 2);
    }
    var mid = window.innerWidth/2;
    if(event.clientX.valueOf()+w/2> positionl.left && event.clientX.valueOf()+w/2< (positionl.left+80)){

        $(".nw-pupil").css("left", event.clientX.valueOf()-w/2);
     //   $(".nw-pupil2").css("left", event.clientX.valueOf()-w/2);

    }
    }
}
