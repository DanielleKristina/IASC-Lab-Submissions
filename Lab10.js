//This will output when the page loads
document.write("Output Here");

//This will output when a button is pressed
functionaddBy(){
	num1 = document.getElementById("First Number").value;
  num2 = document.getElementById("Second Number")
  document.getElementById("Answer").innerHTML = num1 + num2;
}

functionsubtractBy(){
  num1 = document.getElementById("First Number").value;
  num2 = document.getElementById("Second Number")
  document.getElementById("Answer").innerHTML = num1 - num2;
}

functionmultiplyBy(){
  num1 = document.getElementById("First Number").value;
  num2 = document.getElementById("Second Number")
  document.getElementById("Answer").innerHTML = num1 * num2;
}

functiondivideBy(){
  num1 = document.getElementById("First Number").value;
  num2 = document.getElementById("Second Number")
  document.getElementById("Answer").innerHTML = num1 / num2;
}
