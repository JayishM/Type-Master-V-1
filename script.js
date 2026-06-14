let easyBtn=document.getElementById("easy");
let mediumBtn=document.getElementById("medium");
let hardBtn=document.getElementById("hard");

let textDisplay = document.getElementById("textDisplay");
let hiddenInput = document.getElementById("hiddenInput");

let currentText = "";

hiddenInput.addEventListener("input",()=>{
  render();
  if(hiddenInput.value==currentText){
    alert("Completed!");
  }
});

easyBtn.addEventListener("click",()=>{
  fetch("http://localhost:3000/easy")
  .then(response=>response.json())
  .then(data=>{
    currentText=data.Data.text;
    hiddenInput.value="";
    render();
    hiddenInput.focus();
  })
  .catch(error=>{
    console.log(error);
  });
});

mediumBtn.addEventListener("click",()=>{
  fetch("http://localhost:3000/medium")
  .then(response=>response.json())
  .then(data=>{
    currentText=data.Data.text;
    hiddenInput.value="";
    render();
    hiddenInput.focus();
  })
  .catch(error=>{
    console.log(error);
  });
});

hardBtn.addEventListener("click",()=>{
  fetch("http://localhost:3000/hard")
  .then(response=>response.json())
  .then(data=>{
    currentText=data.Data.text;
    hiddenInput.value="";
    render();
    hiddenInput.focus();
  })
  .catch(error=>{
    console.log(error);
  });
});

function render(){
  let typed=hiddenInput.value;
  let html="";
  for(let i=0;i<currentText.length;i++){
    if(i<typed.length){
      if(typed[i]==currentText[i]){
        html+=`<span class="correct">${currentText[i]}</span>`;
      }
      else{
        html+=`<span class="incorrect">${currentText[i]}</span>`;
      }
    }
    else{
      html+=`<span class="pending">${currentText[i]}</span>`;
    }
  }
  textDisplay.innerHTML=html;
}

document.body.addEventListener("click",(e)=>{
  if(e.target.id!="easy" && e.target.id!="medium" && e.target.id!="hard"){
    hiddenInput.focus();
  }
});
