
var numberOfButton = document.querySelectorAll(".drum").length;

for (i =0; i< numberOfButton; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        alert("i am clicked");
    });
     
}
