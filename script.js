let lang = "en";
let adLink = "https://omg10.com/4/10857803";
let targetUrl = "";

function setLang(l){
  lang = l;

  document.querySelectorAll(".en").forEach(e=>{
    e.style.display = (l==="en")?"block":"none";
  });

  document.querySelectorAll(".sw").forEach(e=>{
    e.style.display = (l==="sw")?"block":"none";
  });
}

/* ADS ON DOWNLOAD */
function downloadGame(url){
  event.preventDefault();
  targetUrl = url;
  window.open(adLink,"_blank");
  document.getElementById("adBox").style.display="flex";
}

function closeAd(){
  document.getElementById("adBox").style.display="none";
  window.location.href = targetUrl;
}