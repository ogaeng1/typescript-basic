// 리터럴 타입은 집합 타입의 보다 구체적인 하위 타입입니다.
// 이것은 "hello world"는 string 이지만, string은 "hello world"가 아님을 의미합니다.


//const를 사용하여 변수 helloworld가 절대 변경되지 않음을 보장합니다.
// 따라서 타입스크립트는 타입을 string이 아닌 hello world로 정합니다.
// 변수 이름 위에 마우스를 올려 확인할 수 있습니다.
const helloworld = "hello world"

//반면 let은 변경될 수 있기 때문에 컴파일러는 타입을 string으로 정합니다.
// 마찬가지로 변수명 위에 마우스를 올려 확인할 수 있습니다.
let hello = "hello world"

// 유니온타입은 받아들이는 타입을 보다 유연하게 선언할 때 사용합니다.
type whatever = {
    what: string
}

// 위 whatever 타입에서는 what 속성이 string 타입이라고 선언하였습니다.
// 만약 what 속성의 타입이 string일 수도 있고, number 일 수도 있을 경우 다음과 같이 사용할 수 있습니다.
type whatever1 = {
    what: string | number
}

// 기존의 whatever 타입을 선언하고 what 속성에 number 타입을 선언하면 에러가 발생합니다.
// 'number' 형식은 'string' 형식에 할당할 수 없습니다.
const union: whatever = {
    what: 3
}

//하지만 whatever1 타입을 사용할 경우 에러가 발생하지 않습니다.
// what 속성의 타입이 string이거나 number일 수 있기 때문입니다.

const union1: whatever1 = {
    what: 3
}