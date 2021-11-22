var animals = ["Cat", "Dog", "Elephant", "Horse", "Mouse"];
var text = "";
var i = 0
while (i < animals.length) {
    text += animals[i] + "<br>";
    i++;
    console.log(animals)
}
document.getElementById("demo").innerHTML = text;
