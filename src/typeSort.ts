// //문자 
// let str: string 
// let red: string = "REd" // 문자 단어만 할당 가능 
// let blue: string = `my color is ${red}`
// //숫자 
// let num: number //최초 undefined 시작이지만 이후에는 숫자가 할당되어야 한다
// //console.log(num) 이거 오류뜸 undefined 이고 아직 할당이 안되서 사용 못한다 사용할거면 할당 후 사용
// let float: number = 3.14
// let infinity: number = Infinity
// let nan: number = NaN
// //불린 
// let isBoolean: boolean
// let isDone: boolean = false

// //Null/undefined
// let nul: null
// let und: undefined
// //console.log(nul) 이거 오류뜸 널을 초기화 안해서 nul은 그냥 null만 들어갈수있음 잘 안쓴다

// ///배열
// //해당 타입만 들어가는 경우
// const fruits: string[] = ["APple","bannna"]
// const numbers: number[] = [1,2,3]
// //섞이는 경우
// const union: (string|number) [] = ['apple',1,2,'helo'] //union 타입 
// //const array: [] = [1,2,3] 이것도 안됨 

// // 객체타입 
// // 이렇게 이런 타입들도 오브젝트라서 실제론 저렇게 object라고 안씀 
// const obj: object = {}
// const arr: object = []
// const func: object = function () {}
// // 실제로 쓰는 것 
// // 근데 이렇게 사용하면 조금 불편함 매번 타입을 작성해야되니까 
// const userA : {
//     name: string
//     age: number
//     isValid: boolean
// } = {
//     name: "Halsy",
//     age: 27,
//     isValid: true
// }
// const userB : {
//     name: string
//     age: number
//     isValid: boolean
// } = {
//     name: "Max",
//     age: 27,
//     isValid: true
// }
// //이래서 인터페이스를 사용한다. 시작을 대문자로 
// interface User {
//     name: string
//     age: number
//     isValid: boolean
// }

// const userC: User = {
//     name: "Maxxxxx",
//     age: 27,
//     isValid: true
// }

// /// 함수
// // void는 return하는 것이 없으면 void를 붙인다 
// const hello: () => void = function () {
//     console.log('Hello Worlds')
// }
// //이걸더 선호
// const hello2 = function (): void {
//     console.log('hi')
// }
// const h: void = hello()

// const add: (x: number,y:number) => number = function (x,y) {
//     return x+y
// }
// //이걸더 선호
// const add2 = function (x:number,y:number) : number {
//     return x+y
// }
// const a: number = add(1,2)


// //Any
// // 어떤 타입이든 가능하기에 사용하지 않는 것이 좋다,타입관리를 엄격하게 해야지 에러도 덜 발생하고 ts 쓰는 이유가 있는것
// // js랑 똑같은 거니까 
// let h123: any = 'Hello world'
// h123 = 123
// h123 =[]

// // Unknown
// // 어떤 데이터가 할당될지 모르기에 알수없다
// const a1: any = 123
// const u: unknown = 123

// // any는 다 가능해버림 이렇게
// const any: any = a1
// const bol1: boolean = a1
// // unknown은 any뺴고 다안된다 애니말고 언노운 쓰자

// // Tuple // 사실 그렇게 많이 쓰진 않는다 숫자와 갯수가 지정되어있어야함 
// const tuple: [string,number,boolean] = ['a',1,false]
// const users: [number,string,boolean][] 
// = [ [1,'neo',true],[2,'ee',false]]

// //void 리턴키워드 명시 안하는 것 

// function sayHi(msg: string):void{
//     console.log(`hello ${msg}`)
// }

// const hi1: void = sayHi("kims")
// //never 절대 발생하지 않는 타입 아예안쓰긴함
// // 에러메시지에서 never 를 만나면 타입을 잘 확인해보자 타입지정을 잘 확인해보기 

// //union

// let uni: string | number // 문자 또는 숫자가 할당 가능하다 
// uni = 'hello'
// uni = 123

// // intersection 
// interface A {
//     name: string
// }

// interface B {
//     age: number
// }
// // name age 둘중 어느것도 하나 빠지지 않고 들어가야 된다 .
// const inter: A & B = {
//     name: 'ksy',
//     age: 26
// }