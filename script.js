function addItem(){
let items=JSON.parse(localStorage.getItem("items"))||[];
let name=document.getElementById("name").value;
let file=document.getElementById("file").files[0];
let section=document.getElementById("section").value;
let premium=document.getElementById("premium").checked;

let reader=new FileReader();
reader.onload=function(e){
items.push({name,section,premium,img:e.target.result});
localStorage.setItem("items",JSON.stringify(items));
loadItems();
}
reader.readAsDataURL(file);
}

function loadItems(){
let items=JSON.parse(localStorage.getItem("items"))||[];
["portfolio","farming","business"].forEach(sec=>{
document.getElementById(sec+"Container").innerHTML="";
});

items.forEach(item=>{
let div=document.createElement("div");
div.className="card";
div.innerHTML=`<h3>${item.name} ${item.premium?"🔒":""}</h3><img src="${item.img}" width="100%">`;

document.getElementById(item.section+"Container").appendChild(div);
});
}

function searchFunction(){
let input=document.getElementById("searchInput").value.toLowerCase();
let cards=document.querySelectorAll(".card");
let found=false;

cards.forEach(c=>{
let t=c.innerText.toLowerCase();
if(t.includes(input)){c.style.display="block";found=true;}
else{c.style.display="none";}
});

document.getElementById("noResults").style.display=found?"none":"block";
}

loadItems();
