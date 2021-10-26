form.addEventListener("submit", function(e){
  e.preventDefault();
  formSubmit();
  formInputClear();
})

function formSubmit(){
  const form = document.getElementById("form");
  const topImgText = form.elements["topImgText"].value;
  const botImgText = form.elements["botImgText"].value;
  const url = form.elements["url"].value;
  createMeme(url, topImgText, botImgText);
  // Rem console log
  // console.log(topImgText, botImgText, url);
}

function formInputClear(){
  let form = document.getElementById("form");
  form.elements["topImgText"].value = "";
  form.elements["botImgText"].value = "";
  form.elements["url"].value = "";
}

function createMeme(url, topImgText, botImgText){
  let galleryContainer = document.getElementById("galleryContainer");
  let newImgContainer = document.createElement("div");
  let newImg = document.createElement("img");
  let newTopTxt = document.createElement("p");
  let newBotTxt = document.createElement("p");
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");
  newImgContainer.append(overlay);
  overlay.textContent = "X";

  galleryContainer.append(newImgContainer);
  newImgContainer.append(newImg);
  newImgContainer.append(newTopTxt);
  newImgContainer.append(newBotTxt);
  newImgContainer.addEventListener("click", (removeMeme));
  newImg.src = url;
  newTopTxt.textContent = topImgText;
  newBotTxt.textContent = botImgText;
  newImgContainer.classList.add("imgContainer");
  newTopTxt.classList.add("topTxt");
  newBotTxt.classList.add("botTxt");
  
}

function removeMeme(event){
  let currentMeme = event.target;
  currentMeme.parentNode.remove();
 }
