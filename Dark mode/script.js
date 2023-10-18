const switchData = document.getElementById("checkbx");
// document.getElementById("checkbx").addEventListener("click", themChange);
console.log(switchData);
switchData.addEventListener("click", themChange)

function themChange(){
  console.log("clicked")
    if(document.body.style.backgroundColor=="black"){
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
    else{
        document.body.style.backgroundColor= "black"
        document.body.style.color= "white";
    }
   

}