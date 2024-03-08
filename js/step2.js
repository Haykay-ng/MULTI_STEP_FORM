const arcade = document.getElementById("arcade")
const advanced = document.getElementById("advanced")
const pro = document.getElementById("pro")
const arcadePrice = document.getElementById("arcadePrice")
const advancedPrice = document.getElementById("advancedPrice")
const proPrice = document.getElementById("proPrice")
const togglebtn = document.getElementById("flexSwitchCheckChecked")

console.log(togglebtn.checked);

// function to update price 
function updatePrice(){
    const isYearly = togglebtn.checked
    console.log(isYearly);

    // storage isYearly in localStorage
    localStorage.setItem("isYearly", isYearly);

    // update priceless for each plan 
    arcadePrice.innerHTML = isYearly ? "$90/yr" : "$9/mo" 
    advancedPrice.innerHTML = isYearly ? "$120/yr" : "$12/mo" 
    proPrice.innerHTML = isYearly ? "$150/yr" : "$15/mo" 


    arcade.innerHTML = isYearly ? "2 months free" : ""  
    advanced.innerHTML = isYearly ? "2 months free" : "" 
    pro.innerHTML = isYearly ? "2 months free" : "" 


    
    
}
updatePrice();

// function to toggle monthly/ yearly 
togglebtn.addEventListener("change", updatePrice)

// go Back 
// goBack.addEventListener("click",function (){
//     // retrieve location data 
//     const data = localStorage.getItem("formData");
//     const parsed = JSON.parse(data)

// })
// const data = localStorage.getItem("formData")
// console.log(data);
// const parsed = JSON.parse(data)
// console.log(parsed);

