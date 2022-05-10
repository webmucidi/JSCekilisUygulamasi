let sayac=0;
let listedekiler=[];

document.getElementById("btnEkle").addEventListener("click", ()=>{
  let aday=document.getElementById("txtAday").value;
  let liste=document.getElementById("listeAdaylar");
  const eleman = document.createElement("li");
  liste.appendChild(eleman);
  eleman.innerHTML=aday;
  sayac++;

  listedekiler.push(eleman);
})

function cekilisiYap(){
  let sayi=Math.floor(Math.random() * sayac);



  let sonuc=document.getElementById("sonuc").innerHTML=listedekiler[sayi].innerHTML;
  
}
















