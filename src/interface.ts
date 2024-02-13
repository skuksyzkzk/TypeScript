// 인터페이스 

// // 선택적 속성 - ?
// // 읽기전용 속성 - readonly

// interface User{
//     name : string
//     age :number
//     isValid?: boolean // 있어도 되고 없어도 되고 
//     readonly money: number
// }

// const my: User = {
//     name: "mx",
//     age: 26,
//     money : 2099
// }

// const you: User = {
//     name: "tt",
//     age: 21,
//     isValid : true,
//     money : 2099
// }

// //you.money = 123 readonly라서 수정이 안된다

// // 함수타입 - 호출 시그니처 => 이거 통해서 함수 타입 지정 안그러면 안된다

// interface GetName {
//     (msg:string) : string // 매개변수 : 리턴값
// }

// interface Game {
//     name: string
//     getName: GetName
// }
// interface Game2 {
//     name: string
//     getName: (param:string) => string// 이름은 달라도 되지만 타입과 갯수는 같아야한다 
// }

// const game1: Game = {
//     name:"tiktok",
//     getName(msg:string) {
//         console.log(msg+this.name)
//         return this.name
//     }
// }

// game1.getName("helloo")


// // 인덱스 ㅡ가능 타입 - 인덱스 시그니처
// // 숫자나 문자를 통해서 인덱싱하여서 데이터타입을 지정가능하다는 것 

// // 배열
// interface Fruits {
//     [items: number]: string
// }

// const fruits: Fruits = ['apple','bannna']
// console.log(fruits[1])//bannna  출력 

// // 객체
// interface Human {
//     [key:string] : unknown
//     name: string
//     age: number
// }

// const ksy: Human = {
//     name:'ksy',
//     age:26
// }

// ksy['emails'] = ['ksyzkzk@gmail.com','test@gmail.com']
// ksy['isValid'] = true
// ksy.name = 'kim'

// console.log(ksy)

// interface Param {
//     [key:string] : unknown
// }
// function logValues(param: Param) {
//     for(const key in param){
//         console.log(param[key])
//     }
// }
// //이렇게 인덱싱 가능한 타입으로 만들어줘야된다

// interface Man {
//     [key:string]: unknown
//     name:string
//     age:number
// }
// const superman: Man ={
//     name: 'kim',
//     age: 26
// }

// logValues(superman)

// // 확장(상속 )
// /**
//  * 인터페이스를 상속받아서 사용이 가능하다
//  * 
//  */

// interface UserA {
//     name:string
// }

// interface UserB extends UserA {
//     age: number
// }

// const neo: UserB ={
//     name:'ket',
//     age:26,
//     isVal: true
// }
// //이렇게 같은 이름으로 하게 되면 추가가 된다
// interface UserB {
//     isVal: boolean
// }