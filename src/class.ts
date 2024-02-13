// 클래스 

// /**'
//  * 접근 제어자 - 메소드에서도 사용가능 (속성의 값이 함수면 메소드)
//  * public - 어디서나 사용가능 클래스 바디에서 생략 가능함 아무것도 안붙이면 자동으로 public 
//  * - 하지만 매개변수 내에서는 생략 불가능 
//  * private - 내 클래스에서만 
//  * protected- 나와 파생된 후손 클래스 내에서
//  */

// class User {
//     public first:string =""
//     protected last:string =""
//     private age:number =0
//     constructor(first:string,last:string,age:number) {
//         this.first=first
//         this.last=last
//         this.age =age
//     }
//     public getAll(){
//         return `${this.first} is ${this.last} age: ${this.age}`
//     }
// }
// class User2 {
//     //이게 user의 축약형
//     constructor(public first:string,public last:string,public age:number) {
//     }
//     public getAll(){
//         return `${this.first} is ${this.last} age: ${this.age}`
//     }
// }

// class UserB extends User{ // age는 private라서 접근이 불가능 
//     getAll(){
//         return `${this.first} is ${this.last}`
//     }
// }

// const user = new User('kim','sungyep',26)
// console.log(user.first)
// //console.log(user.last) age 둘다 오류 임 