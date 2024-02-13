// // 타입 단언 
// // 주저하지 않고 딱 잘라 말함 우리가 개발자가 타입스크립트한테 딱잘라말함 


// /**
//  * 단언 키워드 
//  * 1. as
//  * 
//  * 2. Non-Null 키워드 !
//  * 
//  */


// // 1) null과 HTMLBodyElement 둘다 리턴가능해서 오류뜸 왜냐 body라는게 없을수도 있으니까 하지만 개발자가 단언해서 알려주면 오류가 안뜬다 
// //const el = document.querySelector('body') as HTMLBodyElement
// const el = document.querySelector('body')
// el!.textContent = "hi " // 이렇게 쓰면 el은 null이 아니라고 단언 해준거라 오류 안뜸 하지만 이것도 문제
// //왜냐하면 타입 단언이라는 거 자체가 오류를 안뜨게 막아주는 것이라 실제로 body가 없을 경우에 문제가되는것 

// //그래서 해결책이 "TYPE guard" el이 없으면 null이기에 if문으로 해주면 된다 
// if(el){
//     el.textContent = "type guard"
// } 

// // 2) toFixed는 숫자에서만 사용 가능해서 단언해줌 하지만 null도 getnumber로 들어갈수이썽서 문제 
// // function getNumber(x:number |null|undefined) {
// //     return Number((x as number).toFixed(2))
// // }
// // function getNumber(x:number |null|undefined) {
// //     return Number(x!.toFixed(2))
// // }// 이것도 잘못된거임 사실 

// // 이게 맞는 것 타입가드로 
// function getNumber(x:number|null|undefined) {
//     if(x){
//         return Number(x.toFixed(2))
//     }
// }
// getNumber(3.14525)
// getNumber(null)//실행시키면 오류 뜨지만 여기서는 오류 안뜸 

// // 3) 타입 단언이 필요한 경우 
// function getValue(x: string | number , is: boolean) {
//     if(is) {
//         return Number((x as number).toFixed(2))
//     }
//     return (x as string).toUpperCase()
// }

// getValue('Hello',false)
// getValue(3.14525,true)

// // 할당 단언 

// //let num1: number 
// //console.log(num1) 여기선 원래 오류 

// let num1!: number
// console.log(num1) // 이렇게 하면 undefined 출력된다. 