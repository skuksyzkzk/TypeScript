// 제네릭(Generic) <> 이게 제네릭   
// /**
//  *  함수 
//  * 타입 추론을 통해서 하는 것 
//  */

// interface Obj {
//     x:number
// }
// type Arr = [number,number]

// function toArray<T>(a:T,b:T) {
//     return [a,b]
// }

// console.log(
//     toArray('Neo','kim'),
//     toArray(1,2),
//     toArray(true,false),
//     //toArray('12',123) 이것도 안됨 '12'여기서 스트링으로 추론해서 뒤 b도 스트링이여야된다.
//     //toArray({x:1},{y:2})
//     toArray({x:1},{x:2}),
//     toArray([1,2],[3,4,5]),//타입추론을 number[] 이걸로해서 3개 들어가도 문제 없는 것 
//     toArray<Arr>([1,2],[3,5])
// )

// /**
//  * 클래스 
//  */

// class User<P>{
//     constructor(public payload: P){}
//     getPayload(){
//         return this.payload
//     }
// }

// interface Atype {
//     name: string
//     age: number
// }
// interface Btype{
//     name:string
//     age:number
//     email: string[]
// }

// const userA = new User<Atype>({
//     name:'kim',
//     age:13
// })

// const userB = new User<Btype>({
//     name:"lel",
//     age:23,
//     email:['ksy@gmail.com']
// })

// console.log(userA)
// console.log(userB
// )
// console.log(userA.getPayload())

// /**
//  * 
//  * 인터페이스
//  * 제약조건
//  */

// interface MyData<T extends string | number> {
//     name: string
//     value: T
// }

// const dataA:MyData<string> = {
//     name:"dataA",
//     value: 'Hello'
// }

// const dataB:MyData<number> = {
//     name:"dataB",
//     value: 2
// }