var addPs4 = document.getElementById("addps4");
var addXbob = document.getElementById("addxbox");
var addNintendo = document.getElementById("addnintendo");
var prixU='';
var del = document.getElementById("clear");
function item1() {
prixU=document.getElementById("prix1").innerHTML;

  console.log(document.getElementById("img1").src);
  console.log(document.getElementById("prix1").innerHTML);

  document.getElementById("imgvide").src = document.getElementById("img1").src;
  document.getElementById("total").innerHTML= document.getElementById("prix1").innerHTML;

    // var prixUnitaire = document.getElementById("prix1").innerHTML ;
    // var counter = document.getElementById("count").innerHTML;
    // var total= prixUnitaire*counter;
    // document.getElementById("total").innerHTML= total
}
function plus() {
  document.getElementById("count").innerHTML++;
  var total = prixU*document.getElementById("count").innerHTML
  document.getElementById("total").innerHTML=total


}
function moins(){
  if(document.getElementById("count").innerHTML>1){
      document.getElementById("count").innerHTML--;
  }
  var total= prixU*document.getElementById("count").innerHTML
  document.getElementById("total").innerHTML=total
}
    addPs4.addEventListener("click", ()=> item1());

function item2() {
  prixU=document.getElementById("prix2").innerHTML;

  console.log(document.getElementById("img2").src);
  console.log(document.getElementById("prix2").innerHTML);

  document.getElementById("imgvide").src = document.getElementById("img2").src;
  document.getElementById("total").innerHTML= document.getElementById("prix2").innerHTML;

}

function plus() {
  document.getElementById("count").innerHTML++;
  var total = prixU*document.getElementById("count").innerHTML
  document.getElementById("total").innerHTML=total


}
function moins(){
  if(document.getElementById("count").innerHTML>1){
      document.getElementById("count").innerHTML--;
  }
  var total= prixU*document.getElementById("count").innerHTML
  document.getElementById("total").innerHTML=total
}
    addXbob.addEventListener("click", ()=> item2());


    function item3() {
      prixU=document.getElementById("prix3").innerHTML;
      console.log(document.getElementById("img3").src);
      console.log(document.getElementById("prix3").innerHTML);
      document.getElementById("imgvide").src = document.getElementById("img3").src;
      document.getElementById("total").innerHTML= document.getElementById("prix3").innerHTML;
    }
    function plus() {
      document.getElementById("count").innerHTML++;
      var total = prixU*document.getElementById("count").innerHTML
      document.getElementById("total").innerHTML=total
    }
    function moins(){
      if(document.getElementById("count").innerHTML>1){
          document.getElementById("count").innerHTML--;
      }
      var total= prixU*document.getElementById("count").innerHTML
      document.getElementById("total").innerHTML=total
    }
    addNintendo.addEventListener("click", ()=> item3());

    function clearContent(){
document.getElementById("imgvide").src = ''
document.getElementById("total").innerHTML='-'
document.getElementById("count").innerHTML='1'

    }
    del.addEventListener("click",()=>clearContent());



    function myFunction(x) {
    
      if (x.className=='far fa-heart'){
          x.className='fas fa-heart'}
          else{
              x.className='far fa-heart'
          }
      }




