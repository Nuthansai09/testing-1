let container0 = document.getElementById("container11")
let container1 = document.getElementById("container12")
let container2 = document.getElementById("container13")

let div1 = document.getElementById("div1")
let done = document.getElementById("btnDone")
let close = document.getElementById("btnClose")

done.addEventListener("click" , ()=>{

    container1.append(div1)
    


})
close.addEventListener("click" , ()=>{
    container2.append(div1)

})

// function clicked(){
//     div1.style.display= "none"

// }

// function closed(){
//     div1.style.display= "none"
    
// }