// 타입 가져오기 내보내기
import { getAll,User } from "./user";

const user1: User = {
    firstName: 'kim',
    lastName: 'sungyeop',
    age:27
}

const full = getAll(user1)
console.log(full)
console.log(user1.age)