function isValid(){
  return(document.getElementById('password').value.s() + "asdgfjhgyue".s() + 2*"grywvdv".s() == 64858126)
};

function show(){
if (isValid())
  {
    document.getElementById("password").style.display = "none";
    document.getElementById("btnPass").style.display = "none";
    document.getElementById("Argus").style.display = "block";
  }
};

String.prototype.s = function() {
  var u = 0, i, c;
  if (this.length === 0) return u;
  for (i = 0; i < this.length; i++) {
    c   = this.charCodeAt(i);
    u  = ((u << 5) - u) + c;
    u |= 0;
  }
  return u;
};
