var attempt = 3; // Variable to count number of attempts.


function validate(){
var username = document.getElementById("username").value;


var password = document.getElementById("password").value;


if ( username == "jessica" && password == "@js2019"){
alert ("Login successfully");
window.location = "Table.html";
return false;
}
else{
attempt --;

alert("You have left "+attempt+" attempt;");

if( attempt == 0){
alert("username jessica/ password @js2019 ");
return false;
}
}
}
