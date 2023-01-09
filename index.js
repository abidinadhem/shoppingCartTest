var addPs4 = document.getElementById("addps4");
var addXbob = document.getElementById("addxbox");
var addNintendo = document.getElementById("addnintendo");

function item1() {
//   var image = document.getElementById("img1").src;
//   var prix = document.getElementById("prix1").value;
  console.log(document.getElementById("img1").src);
  console.log(document.getElementById("prix1").innerHTML);

  document.getElementById("imgvide").src = document.getElementById("img1").src

    var prixUnitaire = document.getElementById("prix1").innerHTML ;
    var counter = document.getElementById("count").innerHTML;
    var total= prixUnitaire*counter;
    document.getElementById("total").innerHTML= total
}
function increment(){
    // document.getElementById("count").innerHTML= document.getElementById("count").innerHTML+
    var count = document.getElementById("count").innerHTML
    count = count+1
    console.log(count)
    //how to convert string to number?
}

addPs4.addEventListener("click", ()=> item1());

