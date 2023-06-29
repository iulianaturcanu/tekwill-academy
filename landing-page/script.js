const toggleMenu = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.nav-links');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// form.addEventListener('submit', (event) => {
//   // To prevent form submission
//   event.preventDefault();
//   const fullNameInput = document.querySelector('.fullName');
//   const emailInput = document.querySelector('input[type="email"]');
//   const select1 = document.querySelector('select:nth-of-type(1)');
//   const select2 = document.querySelector('select:nth-of-type(2)');
//   const messageInput = document.querySelector('.message-input');

//   if (fullNameInput.value.trim() === '') {
//     alert('Please enter your name');
//     emailInput.focus();
//   }

//   console.log(fullNameInput.value.trim());
//   console.log(emailInput.value);
//   console.log(select1.value);
//   console.log(select2.value);
//   console.log(messageInput.value);
  
//   form.reset();
// });

const openModal = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'block';
})

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
})
