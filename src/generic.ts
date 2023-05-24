// 제네릭은 한 가지 타입보다 여러 타입에서 동작하는 컴포넌트를 만드는데 사용합니다.
// 따라서 재사용성이 높은 함수나 클래스를 만들 수 있습니다.

//평범한 함수 사용
// 타입을 지정해 주어야 합니다.
function App(arg: number):number {
    return arg;
}

// any 타입 사용시
// any 타입은 어떤 타입이든 받을 수 있다는 측면에서는 제네릭으로 볼 수 있지만
// 실제로 함수를 반환할 때 어떤 타입인지에 대한 정보를 잃게 됩니다.
function App1(arg: any): any {
    return arg;
}

// 제네릭 사용 함수
// 일반적으로 T를 사용합니다. (꼭 T일 필요는 없습니다.)
// 무엇이 반환되는지 표시하기 위해 인수의 타입을 캡처합니다. 값이 아닌 타입에 적용되는 타입 변수를 사용합니다.
// any 를 사용하는 것과 다르게 인수와 반환 타입에 number를 사용하는 첫번째 App 함수만큼 정확합니다. (어떤 정보도 잃지 않음!!)
function App2<T>(arg: T): T {
    return arg;
}

//제네릭으로 함수를 작성하고 나면 두 가지 방법으로 호출이 가능합니다.
//첫 번째는 함수에 타입 인수를 포함한 모든 인수를 전달하는 방법입니다.
let output = App2<number>(3);

// 두 번째는 타입 추론 방법입니다. 전달하는 인수에 따라 컴파일러가 T값을 자동으로 정합니다.
let output2 = App2("이것은 문자열")