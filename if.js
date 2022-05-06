// 1. case가 2개일때
// if(조건식){
//   실행문(참값) : 조건식이 true일때 실행할 문장
// }else {
//   실행문(거짓값) : 조건식이 false일때 실행할 문장
// }

// 조건문(조건식)  ===> 결과값 : true/false
// 좌항  ==   우항
//      >(=)
//      <(=) 

// 2. case가 3개이상일때
// if(조건식1){
//   실행문1
// }else if(조건식2) {
//   실행문2
// }else if(조건식3) {
//   실행문3
// }
//  ....
// else {
//   실행문n
// }

// let age = 19
// if(age > 20){
//   console.log("운전이 가능합니다.")
// }else {
//   console.log("운전이 불가능합니다.")
// }

// let age = 21
// if(age > 20){
//   console.log("운전이 가능합니다.")
// }else if(age >= 18) {
//   console.log("오토바이 운전이 가능합니다.")
// }else {
//   console.log("운전이 불가능합니다.")
// }

// let age = 19
// if(age >= 18 && age < 20){
//   console.log("오토바이 운전이 가능합니다.")
// }else if(age >= 20) {
//   console.log("운전이 가능합니다.")
// }else {
//   console.log("운전이 불가능합니다.")
// }

let age = 21
let license = false;
if(age > 20) {
  if(license){
    console.log("운전가능합니다.")
  }else {
    console.log("면허를 따세요")
  }
}else {
  console.log("운전이 불가능한 나이입니다.")
}