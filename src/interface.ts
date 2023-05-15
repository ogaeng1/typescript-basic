// 인터페이스
// 인터페이스는 객체 유형의 이름을 지정하는 방법 중 하나입니다.

//일반적인 사용 방법
interface User1 {
    name: string
    age: number
    gender: string
}

let user1: User1 = {
    name: "홍길동",
    age: 100,
    gender: "M"
}

// 이처럼 인터페이스에서는 name, age, gender 라는 3개의 프로퍼티를 지정했지만
// 지정한 프로퍼티를 모두 사용하지 않으면 에러가 발생한다.
interface User2 {
    name: string
    age: number
    gender: string
}

let user2: User2 = {
    name: "홍길동",
    age: 100,
}

// 만약 gender라는 프로퍼티를 사용하거나 안하거나 상관없음을 나타내려면
// gender 프로퍼티 뒤에 ? 를 붙여주면 에러가 사라진다.
interface User3 {
    name: string
    age: number
    gender?: string
}

let user3: User3 = {
    name: "홍길동",
    age: 100,
}

// 여기서 프로퍼티 값을 변경할 수도 있다.
// 대신 ? 기호가 붙은 프로퍼티는 그 타입에 맞는 값을 넣어주어야 한다.
// gender는 string 타입이기때문에 number 나 boolean 타입으로 변경 불가
user3.name = "철수"
user3.age = 10
user3.gender = "M"


//만약 어떤 값을 절대 바꾸지 못하게 하고싶다면 readonly 속성을 이용할 수 있다.
// 이렇게 읽기전용 속성인 age의 값을 변경하려고 하면
// 읽기 전용 속성이므로 'age'에 할당할 수 없습니다. 라는 에러가 출력된다.
// 이렇게 readonly 속성이 있으면 최초에 생성할 때만 할당이 가능하고
// 그 이후엔 수정이 불가능!
interface User4 {
    name: string
    readonly age: number
}

let user4: User4 = {
    name: "철수",
    age: 10
}

user4.age = 100