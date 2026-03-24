var button=document.getElementById('btn1');

button.onclick = function(){
    alert('Hello')
}

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

    // var v_button=document.getElementById('btn6')

    // var v_text=document.getElementById('text1')
    // v_button.onclick=function(){
    // v_text.style.color='red';
    // }

    var button1 = document.getElementById('btn11')
    var teksti = document.getElementById('txt1')  

    var button22 = document.getElementById('btn22')
    var teksti1 = document.getElementById('txt2')  

    button1.onclick = function(){
        teksti.style.color="red";
        teksti.style.backgroundColor="lightgrey";
        teksti.style.fontSize = "100px";
        teksti.style.padding = "20px";
        teksti.style.textAlign = "center";
    }

    button22.onclick=function(){
        teksti1.style.cssText="color:red; background-color:green; text-Align:center; font-Size:25px; font-family:fantasy; ";
    }

    var ifundit = document.getElementById('ifundit')
    var pgg = document.getElementById('pg')

    ifundit.onclick=function(){
        pgg.setAttribute('class','paragrafi')
    }

    var btn_circle = document.getElementById("btnCircle")
    var btn_rect = document.getElementById('btnRect')
    var btn_triangle = document.getElementById("btnTriangle")

    var circle = document.getElementById("circle")
    var rect = document.getElementById("rect")
    var triangle = document.getElementById("triangle")

    btn_circle.onclick=function()
    {
        circle.setAttribute("class","shape_circle");
    }

    btn_rect.onclick=function()
    {
        rect.setAttribute("class","shep_rect");
    }

    btn_triangle.onclick=function()
    {
        triangle.setAttribute("class","shape_triangle");
    }

    circle.onclick=function()
    {
        circle.style.backgroundColor=("class", "hide");
    }   

    rect.onclick=function()
    {
        rect.style.backgroundColor=("class", "hide");
    }

    triangle.onclick=function()
    {
        triangle.style.borderBottomColor=("class", "hide");
    }   

