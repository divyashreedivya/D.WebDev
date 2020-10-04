var radios= document.getElementsByName("gender");
var girls =document.getElementById("girls");
var boys= document.getElementById("boys");

for(var i = 0; i < radios.length; i++) {
    radios[i].onclick = function() {
      var val = this.value;
      if(val == 'male'){  
         boys.style.display = 'block';   
         girls.style.display = 'none';
      }
      else if(val == 'female'){
          boys.style.display = 'none';
          girls.style.display = 'block';
      } 
   }
 }

 var course_prices= new Array();
 course_prices["None"]=0;
 course_prices["Aeronautical Engineering"]=300000;
 course_prices["Biotechnology"]=300000;
 course_prices["Chemical Engineering"]=300000;
 course_prices["Civil Engineering"]=300000;
 course_prices["Computer Science and Engineering"]=350000;
 course_prices["Electrical and Electronics Engineering"]=350000;
 course_prices["Electronics & Communication Engineering"]=350000;
 course_prices["Information Technology"]=350000;
 course_prices["Mechanical Engineering"]=350000;
 course_prices["Mechatronics"]=300000;

function CourseFee(){
    var coursePrice=0;
    var Admform=document.forms["admission"];
    var selectedCourse= Admform.elements["course"];
    coursePrice= course_prices[selectedCourse.value];
    return coursePrice;
}
var hostel_fees= new Array();
hostel_fees["Nn"]=0;
hostel_fees["girls-s"]=150000;
hostel_fees["girls-d"]=105000;
hostel_fees["girls-t"]=75000;
hostel_fees["boys-s"]=145000;
hostel_fees["boys-d"]=100000;
hostel_fees["boys-t"]=75000;

function HostelFee(){
    var hostelfee=0;
    var Admform=document.forms["admission"];
    var selectedhostel=Admform.elements["hostel"];
    hostelfee = hostel_fees[selectedhostel.value];
    return hostelfee;
}

var mess_fees =new Array();
mess_fees["Nn"]=0;
mess_fees["veg"]=45000;
mess_fees["non-veg"]=60000;

function MessFee(){
    var messfee=0;
    var Admform= document.forms["admission"];
    var selectedmess= Admform.elements["mess"];
    messfee=mess_fees[selectedmess.value];
    return messfee;
}
function TotalFee(){
    var total=CourseFee()+HostelFee()+MessFee();
    return total;
}
var styles={
    "background":"#6eb19a",
    "margin":"10px",
    "color":"#020324",
};
function close(){
    document.getElementById("admm").style.display='none';
}
function display(){
    var ad=document.getElementById("admm");
    Object.assign(ad.style,styles);
ad.innerHTML="<h1 style='color:#07083b;'>Receipt</h1><hr>";
ad.innerHTML+=Date()+"<hr>"  ; 
ad.innerHTML+="<p style='text-align:center'>Exodus Institute of Technology</p>";
ad.innerHTML+= "<table><tr><td><b>NAME: </b></td><td>" + document.formad.name.value+"</td></tr>";
ad.innerHTML+= "<tr><td><b>DOB: </b></td><td>" + document.formad.dob.value+"</td></tr>";
ad.innerHTML+= "<br><tr><td><b>COURSE: </b><td>" + document.formad.course.value;
ad.innerHTML+="<br><tr><td><b>Amount: </b><br><td>Course Fee:<td>Rs."+ CourseFee();
ad.innerHTML+="<br><tr><td><td>Hostel Fee:<td>Rs."+HostelFee();
ad.innerHTML+="<br><tr><td><td>Mess fee:<td>Rs."+MessFee();
ad.innerHTML+="<br><hr><tr><td><td>Total Fee:<td>Rs."+TotalFee()
 + "</table><br>";
 ad.innerHTML+="<button style='background:#123456;' onclick='window.location.reload()'>Close</button>";
}