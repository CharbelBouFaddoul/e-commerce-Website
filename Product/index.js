function newarrival(){
    alert('Still not arrived, date of arrival 11/7/2022 ')
  }

/* Search bar js */
function search() {
  const targetDiv = document.getElementById("search-box");
  const btn = document.getElementById("search-icon");
btn.onclick = function () {
 if (targetDiv.style.display !== "none") {
   targetDiv.style.display = "none";
 } else {
   targetDiv.style.display = "block";
 }
};
}

/*Products */ 


var total = 0;
var productcan = 0;

function Produit0(){
  productcan+=1;
  document.getElementById('Cart').innerHTML=productcan;
  total += 65;
}
function Produit1(){
  productcan+=1;
  document.getElementById('Cart').innerHTML=productcan;
  total += 105;
}
function Produit2(){
  productcan+=1;
  document.getElementById('Cart').innerHTML=productcan;
  total += 185;
}
function Produit3(){
  productcan+=1;
  document.getElementById('Cart').innerHTML=productcan;
  total += 200;
}
function Produit4(){
  productcan+=1;
  document.getElementById('Cart').innerHTML=productcan;
  total += 135;
}
function Produit5(){
  productcan+=1;
  document.getElementById('Cart').innerHTML=productcan;
  total += 140;
}
function Produit6(){
  productcan+=1;
  document.getElementById('Cart').innerHTML=productcan;
  total += 100;
}
function Produit7(){
  productcan+=1;
  document.getElementById('Cart').innerHTML=productcan;
  total += 140;
}

function Total(){
  if (productcan >= 1 ){
    document.getElementById('totalP').style.display='block';
    if (productcan <= 1){
      document.getElementById('NPro').innerHTML='You have ' +productcan+ ' product';
    }
    else{
      document.getElementById('NPro').innerHTML='You have ' +productcan+ ' products';
    }
    document.getElementById('TotalPrice').innerHTML='Total ' +total+'$';
  }
  else{
    document.getElementById('totalP').style.display='none';
  }
}

function Buy(){
  productcan = 0;
  total = 0;
  document.getElementById('Cart').innerHTML=productcan;
  document.getElementById('NPro').innerHTML='You have ' +productcan+ ' product';
  document.getElementById('TotalPrice').innerHTML='Total ' +total+'$';
  alert('Thank you for buying! If there any probleme contact us.');
}