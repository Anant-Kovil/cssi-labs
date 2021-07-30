const submitMessage = () => {

    const characterLim = 50;
    const passcodeInput = document.querySelector('#passcode').value;
    const messageInput = document.querySelector('#message').value;
    
if (isUpper(passcodeInput) === true){
    alert("hihiehihi")
}

function isUpper(passcodeInput) {
    return !/[a-z]/.test(passcodeInput) && /[A-Z]/.test(passcodeInput);
}









//     if(messageInput.length > characterLim){

//         alert("Error! Please keep messages to 50 characters!");
//         document.getElementById("message").style.borderColor = "red";
//     }
//     else{
//         firebase.database().ref().push({
//             passcode: passcodeInput,
//             message: messageInput
//         });
//     }
// };