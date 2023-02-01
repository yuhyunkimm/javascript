let n1 = 1;
let d1 = 1.5;
let b1 = true;
let c1 = "가";
let arr = [1, 2, "가"]; //초기화 let a = []; arr[0]
let user = { // user.id / user.hobby[1] / user.account.id
    id: 1,
    username: "ssar",
    email: "ssar@nate.com",
    bobby: ["농구", "축구"], // 컬렉션
    account: {
        id: 1122,
        password: 8087,
        balance: 50000
    } // Object
}; // Object

console.log("n1 : " + n1);
console.log("n1 : ", n1);
console.log(`n1값은 ${n1} 입니다.`);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(user.id);
console.log(user.username);
console.log(user.email);
console.log(user.bobby[1]);
console.log(user.bobby[2]);
console.log(user.account.id);
console.log(user.account.password);
console.log(user.account.balance);
console.log(`user의 입금액은 ${user.account.balance} 입니다`);
