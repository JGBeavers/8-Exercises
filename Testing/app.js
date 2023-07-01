// function holler() {
//   console.log('hey you!');
// }

// const whisper = () => {
//   console.log('This is a test!');
// };

// function add(x, y) {
//   return x + y;
// }

// function subtract(x, y) {
//   return x - y;
// }

// const mathFuncs = [add, subtract];

// setTimeout(whisper, 2000);

const colors = ['teal', 'cyan', 'peach', 'purple'];
// colors.forEach(function (value, index) {
//   const caps = value.toUpperCase();
//   console.log(`At index ${index}, the value is ${caps}`);
// });

const prices = [30.99, 19.99, 2.5, 99.0];
// let total = 0;
// prices.forEach(function (val) {
//   total += val;
// });
// console.log(total);

// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// }

// forEach(colors, function (color) {
//   console.log(color.toUpperCase());
// });

// let newPrices = prices.map(function (price) {
//   return price * 1.25;
// });
// console.log(newPrices);

const todos = [
  {
    id: 1,
    text: 'walk the dog',
    priority: 'high',
  },
  {
    id: 2,
    text: 'walk the chickens',
    priority: 'medium',
  },
  {
    id: 3,
    text: 'feed the cats',
    priority: 'low',
  },
  {
    id: 4,
    text: 'put out the fire in my garage',
    priority: 'very high',
  },
];

const textDos = todos.map(function (todo) {
  return todo.text;
});
