let a1 = document.getElementById("b1");
let a2 = document.getElementById("b2");
let a3 = document.getElementById("b3");
let a4 = document.getElementById("b4");
let a5 = document.getElementById("b5");
let a6 = document.getElementById("b6");
let a7 = document.getElementById("b7");
let a8 = document.getElementById("b8");
let a9 = document.getElementById("b9");


let a11 = document.querySelectorAll(".b11");
let start = document.getElementById("nt");
var p=0;
var z=0;
var g=0;

let arr= new Array();
arr[0]=a1;
arr[1]=a2;
arr[2]=a3;
arr[3]=a4;
arr[4]=a5;
arr[5]=a6;
arr[6]=a7;
arr[7]=a8;
arr[8]=a9;


a1.addEventListener('click',()=>{
    if(z==0){
        var k=0;
        console.log("rohit")
        if(arr[k].innerText == ""){
        tocheck(k);
        }
        g+=1;
        draw();
    }
    
})
a2.addEventListener('click',()=>{
    if(z==0){
        var k=1;
        if(arr[k].innerText == ""){
            tocheck(k);
        }
        g+=1;
        draw();
    }
})
a3.addEventListener('click',()=>{
    if(z==0){
        var k=2;
        if(arr[k].innerText == ""){
            tocheck(k);
        }
        g+=1;
        draw();
    } 
})
a4.addEventListener('click',()=>{
    if(z==0){
        var k=3;
        if(arr[k].innerText == ""){
            tocheck(k);
        }
        g+=1;
        draw();
    }
})
a5.addEventListener('click',()=>{
    if(z==0){
        var k=4;
        if(arr[k].innerText == ""){
            tocheck(k);
        }
        g+=1;
        draw();
    }
})
a6.addEventListener('click',()=>{
    if(z==0){
        var k=5;
        if(arr[k].innerText == ""){
            tocheck(k);
        }
        g+=1;
        draw();
    }
})
a7.addEventListener('click',()=>{
    if(z==0){
        var k=6;
        if(arr[k].innerText == ""){
            tocheck(k);
        }
        g+=1;
        draw();
    }
})
a8.addEventListener('click',()=>{
    if(z==0){
        var k=7;
        if(arr[k].innerText == ""){
            tocheck(k);
        }
        g+=1;
        draw();
    }
})
a9.addEventListener('click',()=>{
    if(z==0){
        var k=8;
        if(arr[k].innerText == ""){
            tocheck(k);
        }
        g+=1;
        draw();
    }   
})









function xpart(){
    if(arr[0].innerText=="X" && arr[1].innerText=="X" && arr[2].innerText=="X"){
          arr[0].style.color="red";
          arr[1].style.color="red";
          arr[2].style.color="red";
          nt.innerText="X has won";
          z=1;
    }
    else if(arr[3].innerText=="X" && arr[4].innerText=="X" && arr[5].innerText=="X"){
            arr[3].style.color="red";
            arr[4].style.color="red";
            arr[5].style.color="red";
            nt.innerText="X has won";
            z=1;
   }
   else if(arr[6].innerText=="X" && arr[7].innerText=="X" && arr[8].innerText=="X"){
            arr[6].style.color="red";
            arr[7].style.color="red";
            arr[8].style.color="red";
            nt.innerText="X has won";
            z=1;
   }
   else if(arr[0].innerText=="X" && arr[3].innerText=="X" && arr[6].innerText=="X"){
            arr[0].style.color="red";
            arr[3].style.color="red";
            arr[6].style.color="red";
            nt.innerText="X has won";
            z=1;
   }
   else if(arr[1].innerText=="X" && arr[4].innerText=="X" && arr[7].innerText=="X"){
            arr[1].style.color="red";
            arr[4].style.color="red";
            arr[7].style.color="red";
            nt.innerText="X has won";
            z=1;
    }
    else if(arr[2].innerText=="X" && arr[5].innerText=="X" && arr[8].innerText=="X"){
            arr[2].style.color="red";
            arr[5].style.color="red";
            arr[8].style.color="red";
            nt.innerText="X has won";
            z=1;
    }
    else if(arr[0].innerText=="X" && arr[4].innerText=="X" && arr[8].innerText=="X"){
            arr[0].style.color="red";
            arr[4].style.color="red";
            arr[8].style.color="red";
            nt.innerText="X has won";
            z=1;
    }
    else if(arr[2].innerText=="X" && arr[4].innerText=="X" && arr[6].innerText=="X"){
            arr[2].style.color="red";
            arr[4].style.color="red";
            arr[6].style.color="red";
            nt.innerText="X has won";
            z=1;
    }



}

function opart(){

    if(arr[0].innerText=="O" && arr[1].innerText=="O" && arr[2].innerText=="O"){
        arr[0].style.color="red";
        arr[1].style.color="red";
        arr[2].style.color="red";
        nt.innerText="O has won";
        z=1;
  }
  else if(arr[3].innerText=="O" && arr[4].innerText=="O" && arr[5].innerText=="O"){
          arr[3].style.color="red";
          arr[4].style.color="red";
          arr[5].style.color="red";
          nt.innerText="O has won";
          z=1;
 }
 else if(arr[6].innerText=="O" && arr[7].innerText=="O" && arr[8].innerText=="O"){
          arr[6].style.color="red";
          arr[7].style.color="red";
          arr[8].style.color="red";
          nt.innerText="O has won";
          z=1;
 }
 else if(arr[0].innerText=="O" && arr[3].innerText=="O" && arr[6].innerText=="O"){
          arr[0].style.color="red";
          arr[3].style.color="red";
          arr[6].style.color="red";
          nt.innerText="O has won";
          z=1;
 }
 else if(arr[1].innerText=="O" && arr[4].innerText=="O" && arr[7].innerText=="O"){
          arr[1].style.color="red";
          arr[4].style.color="red";
          arr[7].style.color="red";
          nt.innerText="O has won";
          z=1;
  }
  else if(arr[2].innerText=="O" && arr[5].innerText=="O" && arr[8].innerText=="O"){
          arr[2].style.color="red";
          arr[5].style.color="red";
          arr[8].style.color="red";
          nt.innerText="O has won";
          z=1;
  }
  else if(arr[0].innerText=="O" && arr[4].innerText=="O" && arr[8].innerText=="O"){
          arr[0].style.color="red";
          arr[4].style.color="red";
          arr[8].style.color="red";
          nt.innerText="O has won";
          z=1;
  }
  else if(arr[2].innerText=="O" && arr[4].innerText=="O" && arr[6].innerText=="O"){
          arr[2].style.color="red";
          arr[4].style.color="red";
          arr[6].style.color="red";
          nt.innerText="O has won";
          z=1;
  }

}




function started(){
    a1.innerText=" ";
    a2.innerText=" ";
    a3.innerText=" ";
    a4.innerText=" ";
    a5.innerText=" ";
    a6.innerText=" ";
    a7.innerText=" ";
    a8.innerText=" ";
    a9.innerText=" ";  

    nt.innerText="X starts";
    a11[0].classList.add("lop");
    a11[1].classList.add("lop");
    a11[2].classList.add("lop");
    a11[3].classList.add("lop");
    a11[4].classList.add("lop");
    a11[5].classList.add("lop");
    a11[6].classList.add("lop");
    a11[7].classList.add("lop");
    a11[8].classList.add("lop");  
    
    p=0;
    z=0;
    g=0;

    arr[0].style.color="white";
    arr[1].style.color="white";
    arr[2].style.color="white";
    arr[3].style.color="white";
    arr[4].style.color="white";
    arr[5].style.color="white";
    arr[6].style.color="white";
    arr[7].style.color="white";
    arr[8].style.color="white";

    
}

function tocheck(k){
    if(p==0){
        arr[k].classList.remove("lop");
        arr[k].innerText="X";
        nt.innerText="O is next";
        xpart(k);
        p=1;
    }
    else if(p==1){
        arr[k].classList.remove("lop");
        arr[k].innerText="O";
        nt.innerText="X is next";
        opart(k);
        p=0;
    }
}

function draw(){
  if(g==9){
    if(z==0){
     nt.innerText="Game Draw";
    }
  }
}

window.onload = started();

