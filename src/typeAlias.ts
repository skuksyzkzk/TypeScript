// 타입별칭 타입의 별도 이름 

// type TypeA = string // 이렇게는 잘 안씀 이유가 없으니까 
// type TypeB = string | boolean | number

// type User = {
//     name: string
//     age: number
// } | [string,number]//튜플하고 객체를 쓰는것을 타입으로 지정했음

// const userA: User = {
//     name:"kim",
//     age:26
// }

// const userB: User = ['kim1',26]

// function someFunc(param: TypeB): TypeA {
//     switch(typeof param){
//         case 'string':
//             return param.toUpperCase()
//         case 'number':
//             return param.toFixed(2)
//         default:
//             return "Boolean type"
//     }
// }

// //타입별칭은 인터페이스를 대신해서도 사용 할 수있다
// /**
//  * 
//  * 굳이 뽑자면 인터페이스가 좀더 낫다라는 것 
//  */