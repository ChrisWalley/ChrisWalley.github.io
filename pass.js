function isValid(myNode){
var password = document.getElementById('password').value;
if (password == "tempPass")
  {
    document.getElementById("password").style.display = "none";
    document.getElementById("btnPass").style.display = "none";
    document.getElementById("ArgusEx").style.display = "block";
    document.getElementById("Argus").style.display = "block";
  }
}
