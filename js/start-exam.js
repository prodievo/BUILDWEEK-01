//variabile e funzione per iniziare esame
const proceed = document.querySelector("#btn-exam")
const checkBox = document.querySelector(".checkbox-style");

// controlCheckbox()

// function controlCheckbox (){
//     if (checkBox.checked == true){
//         proceed.classList.add("button-style");
//         proceed.classList.toggle("unchecked");
//         console.log("check");
//     }
//     else{
//         proceed.classList.add("unchecked");
//     } 
// }

proceed.addEventListener("click", () => {
    if (checkBox.checked == true){
    window.location.href = "exam.html";
    }
    else{
        alert("Your promise is needed to proceed");
    }
})


