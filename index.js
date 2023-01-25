// const btn = document.querySelector('button')

// const clickHandler = () => {
//     console.log('CLICK!!!!')
// }

// btn.addEventListener('click', clickHandler)

// const items = document.querySelectorAll('.item')

// const onClick = (event) => {
// if(event.target.textContent === 'xrtxcx') {
//     console.log('HERE')
// }
// }

// items.forEach(item => item.addEventListener('click', onClick))

const link = document.querySelector('a')




link.addEventListener('click', onLink)



function onLink(e) {
    e.preventDefault()
    console.log(this) 
}

// document.addEventListener("keydown", event => {
//     console.log(event)
//     console.log("key: ", event.key);
//     console.log("code: ", event.code);
//     if(event.code === 'Enter') {
//         console.log('enter')
//     }
//   });

// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const {
//     elements: { login, password }
//   } = event.target;


//   if (login.value === "" || password.value === "") {
//       console.log("Please fill in all the fields!");
//       return
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.target.reset();
// }

// const input = document.querySelector('input')

// input.addEventListener('input', (e) => {
//     console.log(e.target.value)
// })
// const mango = {
//     username: "Mango",
//     showUsername() {
//       console.log(this);
//       console.log(`My username is: ${this.username}`);
//     },
//   };
  
//   const btn = document.querySelector(".btn");
  
// //   ✅ Працює
// //   mango.showUsername();
  
//   // ❌ this буде посилатися на button, якщо використовувати showUsername як callback
// //   btn.addEventListener("click", mango.showUsername); // не працює
  
//   // ✅ Не забувайте прив'язувати контекст методів об'єкта
//   btn.addEventListener("click", mango.showUsername.bind(mango));

