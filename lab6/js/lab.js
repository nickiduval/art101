
myTransport = [ "bike", " Honda Civic", " plane", " jet"];

myMainRide = {
  color : "Brown" ,
  make : "Honda" ,
  model : "Civic" ,
  year : 2002
};

document.writeln("Kinds of Transportation I Use: ", myTransport, "<br>");
document.writeln("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "<pre>");
