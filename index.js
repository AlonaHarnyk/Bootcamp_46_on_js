// // const foo = (a, b) => {
// //   const res = a > b
// //   if(res) {
// //     console.log('true')
// //   } else {
// //     console.log('false')
// //   }
// // }

// // foo(10, 5)

// // // Напиши функцію delay(ms), яка повертає проміс, що переходить в стан "resolved" через ms мілісекунд.
// // //  Значенням промісу, яке виповнилося має бути та кількість мілісекунд, яку передали під час виклику функції delay.

// // const delay = ms => {
// //   // Твій код
// //   return new Promise((resolve) => {
// //   setTimeout(() => {
// //     resolve(ms)
// //   }, ms)
// //   })
// // };

// // const logger = time => console.log(`Resolved after ${time}ms`);

// // // Виклич функції для перевірки
// // delay(2000).then(a => logger(a)); // Resolved after 2000ms
// // delay(1000).then(b => logger(b)); // Resolved after 1000ms
// // delay(1500).then(logger); // Resolved after 1500ms

// // const isSuccess = true;

// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     if (isSuccess) {
// //       resolve("Success! Value passed to reve functsolion");
// //     } else {
// //       reject("Error! Error passed to reject function");
// //     }
// //   }, 2000);
// // });

// // promise
// //   .then((value) => {
// //     console.log(value);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   })
// //   .finally(() => console.log(123));

// // Перепиши функцію toggleUserState() так, щоб вона не використовувала callback-функцію callback, а приймала
// // всього два параметри allUsers і userName і повертала проміс.

// // const users = [
// //   { name: 'Mango', active: true },
// //   { name: 'Poly', active: false },
// //   { name: 'Ajax', active: true },
// //   { name: 'Lux', active: false },
// // ];

// // const toggleUserState = (allUsers, userName, callback) => {
// //   const updatedUsers = allUsers.map(user =>
// //     user.name === userName ? { ...user, active: !user.active } : user,
// //   );

// //   callback(updatedUsers);
// // };

// // const logger = updatedUsers => console.table(updatedUsers);

// /*
//  * Зараз працює так
//  */
// // toggleUserState(users, 'Mango', logger);
// // toggleUserState(users, 'Lux', logger);

// const users = [
//   { name: "Mango", active: true },
//   { name: "Poly", active: false },
//   { name: "Ajax", active: true },
//   { name: "Lux", active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//   const updatedUsers = allUsers.map((user) =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );
//   // return new Promise((res) => {
//   //   const updatedUsers = allUsers.map((user) =>
//   //     user.name === userName ? { ...user, active: !user.active } : user
//   //   );
//   //   res(updatedUsers);
//   // });

//   return Promise.resolve(updatedUsers);
// };

// const logger = (updatedUsers) => console.table(updatedUsers);

// /*
//  * Повинно працювати так
//  */
// toggleUserState(users, "Mango").then((data) => logger(data));
// toggleUserState(users, "Lux").then(logger);

// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve(5);
// //   }, 2000);
// // });

// // promise
// //   .then(value => {
// //     console.log(value); // 5
// //     // return value * 2;
// //   const promise2 = new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         resolve(value * 2);
// //       }, 2000);
// //     })
// //   })
// //   .then(value => {
// //     console.log(value); // 10
// //     return value * 3;
// //   })
// //   .then(value => {
// //     console.log(value); // 30
// //   })
// //   .catch(error => {
// //     console.log(error);
// //   })
// //   .finally(() => {
// //     console.log("Final task");
// //   });

// // Перепиши функцію makeTransaction() так, щоб вона не використовувала callback-функції onSuccess і onError,
// // а приймала всього один параметр transaction і повертала проміс.

// // const randomIntegerFromInterval = (min, max) => {
// //   return Math.floor(Math.random() * (max - min + 1) + min);
// // };

// // const makeTransaction = (transaction, onSuccess, onError) => {
// //   const delay = randomIntegerFromInterval(200, 500);

// //   setTimeout(() => {
// //     const canProcess = Math.random() > 0.3;

// //     if (canProcess) {
// //       onSuccess(transaction.id, delay);
// //     } else {
// //       onError(transaction.id);
// //     }
// //   }, delay);
// // };

// // const logSuccess = (id, time) => {
// //   console.log(`Transaction ${id} processed in ${time}ms`);
// // };

// // const logError = id => {
// //   console.warn(`Error processing transaction ${id}. Please try again later.`);
// // };

// /*
//  * Працює так
//  */
// // makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// // makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// // makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// // makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction) => {
//   const delay = randomIntegerFromInterval(200, 500);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;
//       if (canProcess) {
//         resolve([transaction.id, delay]);
//       } else {
//         reject(transaction.id);
//       }
//     }, delay);
//   });
// };

// const logSuccess = (array) => {
//   console.log(`Transaction ${array[0]} processed in ${array[1]}ms`);
// };

// const logError = (id) => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// /*
//  * Повинно працювати так
//  */
// makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

// makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

// makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

// makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);


// const makePromise1 = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const makePromise2 = (text, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(text), delay);
//   });
// };


// const promiseA = makePromise1("promiseA value", 1000);
// const promiseB = makePromise1("promiseB value", 1000);
// const promiseC = makePromise2("promiseC value", 500);


// Promise.all([promiseA, promiseB, promiseC])
//   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch(error => console.log(error));

const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise("promiseA value", 1000);
const promiseB = makePromise("promiseB value", 3000);

Promise.race([promiseA, promiseB])
  .then(value => console.log(value)) // "promiseA value"
  .catch(error => console.log(error));