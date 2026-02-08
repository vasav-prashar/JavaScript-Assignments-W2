// Sum values in object arrays
// const obj={ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

// const result=Object.entries(obj).map(([key,value])=>{

//     return [key,value.reduce((sum,curr)=>sum+curr,0)]
// })
// console.log(Object.fromEntries(result));

// Count word occurrences in array

// const input = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const ans = {};
// for (let i = 0; i < input.length; i++) {
//   if (ans[input[i]]) {
//     ans[input[i]] += 1;
//   } else ans[input[i]] = 1;
// }
// console.log(ans);

// Swap keys and values of object

// const input = { a: "x", b: "y", c: "z" };
// const ans = Object.entries(input).reduce((final, [key, value]) => {
//   final[value] = key;
//   return final;
// }, {});
// console.log(ans);

// Find the largest value key

// const input = { a: 10, b: 50, c: 20 };

// const res = Object.entries(input).reduce(
//   (final, [key, value]) => {
//     if (value > final.value) {
//       return { key, value };
//     }
//     return final;
//   },
//   { key: null, value: -Infinity }
// );
// console.log(res.key);

