let birthInput = document.querySelector('input');
let calculateBtn = document.querySelector('.btn');
let resultDisplay = document.querySelector('.result');

function calculateAge() {
    let birth = birthInput.value;

    if (birth === "") {
        alert("Please enter a valid birthday");
      } else {
        const age = getAge();
        if (age < 0) {
            alert("Please enter a valid birthday");
        } else {
            resultDisplay.innerText = `Your age is ${age}`;
        }
      }
}


function getAge() {
    let currDate = new Date();
    let birth = birthInput.value;
    let birthDate = new Date(birth);

    let age = currDate.getFullYear() - birthDate.getFullYear();
    let month = currDate.getMonth() - birthDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && currDate.getDate() < birthDate.getDate())
      ) {
        age--;
      }
    
      return age;
}


calculateBtn.addEventListener('click', calculateAge);




