const onlineP = document.querySelector("#online")
const storageP = document.querySelector("#storage")
const profileP = document.querySelector("#profile")

// Retrieve data from local storage
const data = localStorage.getItem("isYearly")

const isYearly = JSON.parse(data)
console.log(isYearly);


//
onlineP.innerHTML = isYearly ? "$10/yr" : "$1/mo"
storageP.innerHTML = isYearly ? "$20/yr" : "$2/mo"
profileP.innerHTML = isYearly? "$20/yr" : "$2/mo"