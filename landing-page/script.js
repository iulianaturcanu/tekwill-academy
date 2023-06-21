// // Accesing Elements
// const element = document.getElementById('myElement');
// // const image = document.getElementsByClassName('image');
// const image = document.querySelector('.image');
// const [button] = document.getElementsByClassName('image-button');

// // Modifying Elements

// const changeBackground = () => {
//   element.style.backgroundColor = '#e45f34';
//   // element.textContent = 'New content';
//   element.innerHTML = `<form class="form-container">
//                 <input type="text" placeholder="Full Name">
//                 <input type="email" placeholder="example@gmail.com">
//                 <select>
//                     <option value="option1">Option 1</option>
//                     <option value="option2">Option 2</option>
//                 </select>
//                 <select>
//                     <option value="option3">Option 3</option>
//                     <option value="option4">Option 4</option>
//                 </select>
//                 <input type="text" placeholder="Message">
//             </form>`;
//   button.removeAttribute('disabled');
// }


// const showImage = () => {
//   // console.log(image.style.display);
//   if (image.style.display === 'none') {
//     image.style.display = 'block';
//     button.textContent = 'Hide image';
//   } else {
//     image.style.display = 'none';
//     button.textContent = 'Show image';
//   }
// }

// button.addEventListener('click', showImage);

// const form = document.querySelector('.form-container');

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


// const fetchData = async () => {
// const url = 'https://restcountries.com/v3.1/all';
// const options = {
// 	method: 'GET',
// };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
//     if(result) {
//     document.getElementById("image").innerHTML = "<img src='" + result[0].flags.png + "' alt='Movie Poster' />";
//     // document.getElementById("release-year").textContent = "Release Year: " + movie.year;
//     //     document.getElementById("title").textContent = "Title: " + movie.title;
//   }} catch (error) {
//     console.error(error);
//   }
// }

// fetchData();
