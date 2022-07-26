// String(문자 데이터)
// 따옴표를 사용합니다.
let name = "Grace"
let email = 'nej1044@namver.com'
let hello = `Hello ${name}?!`

console.log(name) // Grace
console.log(email) // nej1044@naver.com
console.log(hello) // Hello Grace?!

// Number(숫자 데이터)
// 정수 및 부동소수점 숫자를 나타냅니다
let number = 123
let opacity = 1.57

console.log(number) // 123
console.log(opacity) // 1.57

// Boolean(불린 데이터)
// true, false 두 가지 값 밖에 없는 논리 데이터입니다.
let checked = true;
let isShow = false

console.log(checked) // true
console.log(isShow) // false

// Undefined
// 값이 할당되지 않은 상태를 나타냅니다.
let undef;
let obj = {abc: 123}

console.log(undef) // Undefined
console.log(obj.abc) // 123
console.log(obj.xyz) // Undefined

// Null
// 어떤 값이 의도적으로 비어있음을 의미합니다.
let empty = null

console.log(empty) // null

// Object(객체 데이터)
// 여러 데이터를 Key:Value 형태로 저장합니다. {}
let user = {
    // Key: Value,
    name: 'Grace',
    age: 28,
    isValid: true
}

console.log(user.name) // Grace
console.log(user.age) // 28
console.log(user.isValid) // true

// Array(배열 데이터)
// 여러 데이터를 순차적으로 저장합니다. []
let fruits = ['Apple', 'Banana', 'Cherry']

console.log(fruits[0]) // Apple
console.log(fruits[1]) // Banana
console.log(fruits[2]) // Cherry