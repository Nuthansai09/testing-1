const acceptButtons = document.getElementsByClassName("done");
const rejectButtons = document.getElementsByClassName("close");
const acceptContainer = document.getElementById("accepted");
const rejectContainer = document.getElementById("rejected");

function acceptRequest(event){
    const buttonRef = event.target;
    console.log(buttonRef)
    const parentNode = buttonRef.parentNode.parentNode
    // const name = parentNode.children[0].children[1].children[0].innerText ;
    parentNode.children[1].remove();
    acceptContainer.append(parentNode);

}

function rejectRequest(event){
   const buttonRef = event.target ;
   const parentNode = buttonRef.parentNode.parentNode;
   const name = parentNode.children[0].children[1].children[0].innerText ;
   const buttons = parentNode.children[1].children;
   for(let i = 0 ; i < buttons.length ; i++) {
    buttons[i].style.opacity = "0.1"
   }
   rejectContainer.append(parentNode);
}

for(let i = 0 ; i < acceptButtons.length; i++) {
    acceptButtons[i].addEventListener("click" , acceptRequest)
    rejectButtons[i].addEventListener("click", rejectRequest);
}

const button = document.getElementById("open");
button.addEventListener("click", openModal);
const container = document.getElementsByClassName("modal-container")[0] ;
const closeButton = document.getElementsByClassName("close-modal")[0] ;
closeButton.addEventListener("click" ,hideModal)
function openModal() {
    container.style.display = "flex";
    container.style.animation = "transition 0.8s linear"; 
}
function hideModal(){
    container.style.animation = "reverse-transition 0.8s linear";
    setTimeout(() => {
        container.style.display = "none" ;
    }, 800)
}