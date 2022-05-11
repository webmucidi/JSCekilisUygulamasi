let sayac=0;
let listedekiler=[];
let oncekiSayi=0;
let yeniSayi;
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
  yeniSayi=Math.floor(Math.random() * sayac);

  if(yeniSayi == oncekiSayi)
  {
    if (yeniSayi == 0)
    {yeniSayi++;} 
    else 
    {yeniSayi--;}
  }

  console.log(yeniSayi);
  let sonuc=document.getElementById("sonuc").innerHTML=listedekiler[yeniSayi].innerHTML;
  oncekiSayi=yeniSayi;
}
















