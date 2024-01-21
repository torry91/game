const input = document.querySelector("#scrie");
const button = document.querySelector(".btn");
const answer = Math.floor(Math.random() * 20) +1;


input.addEventListener("keypress" , function(e) {
    if (e.keyCode === 13){
        play();
    } 
})



button.addEventListener("click",play);

function play() {

    const userNumber = document.querySelector("#scrie").value;
    if (userNumber < 1 || userNumber > 20) {
       
        Swal.fire ({
            icon: 'error',
            title: 'Ups ... ',
            text: 'Please enter a number from 1 to 20.',
          })
        }

else if (isNaN (userNumber)){

    Swal.fire({
      icon: 'error',
      title: 'Attention !',
      text: 'Enter a number !',
    })
} 
else {
    if (userNumber < answer) {
        Swal.fire('Enter a higher number')
    }

    else if (userNumber > answer){
        Swal.fire('Enter a lower number')
    }

    else{  
        Swal.fire({
            title: 'Congratulations !!!',
            text: 'You won ! Uhuuu !',
            imageUrl: ' https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
            imageWidth: 600,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
    }
} 






    }

