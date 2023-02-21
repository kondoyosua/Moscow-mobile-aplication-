// // Spread Operator membuka array
//  let numbers = [1, 2, 3, 4, 5];

// //  console.log(numbers);
// //  console.log(...numbers);

// // 1. duplikasi array
// let numbers2 = [...numbers];
// number.push(6);
// console.log(numbers2);
// menambahkan objek
// let john = {
//     fullname: "John Doe",
//     age: 33,
//     address: "Manado",
// };

// john = {
//     ...john,
//     job: "Teacher",
// };

// console.log(john);

// mengabungkan objek
// let obj1 = {
//     a: 1,
//     b: 2,
// };
// let obj2 = {
//     c: 3,
//     d: 4,
// };

// let combobj = {
//     ...obj1,
//     ...obj2,
// };
// console.log(combobj);

// Destructuring

// let numbers = [1, 2, 3, 4, 5];

// let [a, b, c, d, e] = numbers;
// let [, x, ,y] = numbers;
// console.log(a);
// console.log(x, y);

// destructuring objek

let john = {
    fullname: "John doe",
    age: 33,
    address: "Manado",
};
// let { fullname, age, address } = john;
// console.log(fullname, age, address);

let ucapkansalam = ({fullname}) => {
    let kalimat = `halo nama saya ${fullname}`;
    console.log(kalimat);
};
ucapkansalam(john);
