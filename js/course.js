var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
function myFunction(){
var input,filter,courses,course,i,b,txt;
input=document.getElementById("myInput");
filter= input.value.toUpperCase();
courses=document.getElementById("mycourse");
course =courses.getElementsByClassName("courseb");

for(i=0;i<course.length;i++){
    b= course[i].getElementsByTagName("button")[0];
    txt= b.textContent || b.innerText;
    if(txt.toUpperCase().indexOf(filter)>-1){
      course[i].style.display="";
    }
    else{
      course[i].style.display="none";
    }
}}
