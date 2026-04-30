// function printName(){
//     document.write("Detjon");
//     document.write("<br>");
//     setTimeout(
//         function(){
//             document.write("Patris");
//         }, 3000
//     );
//     document.write("Drin")

// }

// printName();


var color = ['red', 'green', 'purple'];

var names = ['Omer', 'Rigon', 'Venis'];

function changeColor(){
    document.querySelector('body').style.background = color[Math.floor(Math.random()*color.length)];
}

function changeName(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)]
}


setInterval(changeColor, 2000);
setInterval(changeName, 2000);