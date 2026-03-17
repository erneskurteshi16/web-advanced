// var button=document.getElementById(btn1);

// button1.onclick = function(){
//     alert('Hello')
// }

var button2 =document.querySelector|('button');
  
    button2.onclick=function(){
    alert('other button was clicked')
    }

    var button2 =document.getElementById('btn2')

    button2.onmouseover=function(){
        alert('Mouse is over');
    }

     var button3 =document.getElementById('btn3')

     button3.onmouseleave=function(){
        alert('Mouse left');
    }

    var button4 =document.getElementById('btn4')

    button4.onmousewheel=function(){
        alert('Mouse wheel');
    }

    var v_button=document.getElementById('btn6')

    var v_text=document.getElementById('text1')
    v_button.onclick=function(){
    v_text.style.color='red'
    }