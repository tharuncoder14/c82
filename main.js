var mouseEvent="empty";
var last_x,last_y;

var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var color="red";
var width=1;
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("widthofline").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave",my_mousemove);
function my_mousemove(e){
   current_x=e.clientX-canvas.offsetLeft;
   current_y=e.clientY;

    if(mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
        console.log("last postion of x= "+last_x+" y= "+last_y);
    ctx.moveTo(last_x,last_y);
   
    console.log("current postion of x= "+current_x+" y= "+current_y);
    ctx.lineTo(current_x,current_y);
    ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}
