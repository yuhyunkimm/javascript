function m1() {

}
function m2() {
    return 2;
}
function m3(a) {
    console.log();
}
//세미콜론을 사용하나 없어도 실행가능
let m4 = function () { };// 익명함수 
let m5 = () => { }; //람다식
//m4 = m5 
let m6 = () => 1; //중괄호생략하고 return값을 바로 출력
let m7 = () => {
    return 1;
};
//m6 = m7