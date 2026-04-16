// var mosha = 10;

// if (mosha <8){
//     document.write("Your child is to young to learn programming.");
// }else{
//     document.write("We will call you soon to let you know about the next steps.");
// }

// var age = 6;

// if(age <8){
//     document.write("Your child is to young to learn programming.");
// }else if(age >=18){
//     document.write("Your child is old enough to learn programming.");
// }

// else{
//     document.write("We will call you soon to let you know about the next steps.");
// }



// var input = document.getElementById("input_id");
// var btn = document.getElementById("btn_id");
// var text = document.getElementById("text_id");

// btn.onclick = function(){
//     text.innerHTML = input.value;
// }
 
// var num1 = document.getElementById("input_id1");
// var num2 = document.getElementById("input_id2");
// var btn2 = document.getElementById("btn_id2");
// var result = document.getElementById("result_id");
// var text2 = document.getElementById("text_id2");

// btn2.onclick = function(){
//     var sum = parseInt(num1.value) + parseInt(num2.value);
//     result.innerHTML = sum;
//     if(result > 10){
//         text2.innerHTML = "The result is greater than 10.";

//     }else if(result < 10){
//         text2.innerHTML = "The result is less than 10.";
//     } else{
//         text2.innerHTML = "The result is equal to 10.";
//     }
// }
var wakeeuptime;
var dsTime;
var sleeptime;  
var moom = 12;

function showCurrentTime(){
    var clock = document.getElementById("clock");
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if(hours >= noon){
        meridian = "PM";
    }
   
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;
    changeImage();
}
