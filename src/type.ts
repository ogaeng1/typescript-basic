// 기본타입

const num:number = 1;
const str:string = "문자";
const bool:boolean = true;

const numArr1:number[] = [1,2,3];
const numArr2:Array<number> = [1,2,3];

const strArr1:string[] = ["a", "b", "c"];
const strArr2:Array<string> = ["a", "b", "c"];


// 튜플
// 타입스크립트에서의 튜플은 "길이와 각 요소마다의 타입이 고정된 배열"
// 이정도로 해석 가능할듯??

let practiceTuple: [number, string, boolean];
practiceTuple = [1, "string", true];


//튜플의 문제점

let test_tuple1: [number, number, string];
test_tuple1 = [1, 2, "a"]
test_tuple1.push("hi~");
console.log(test_tuple1);

// test_tuple = [1, 2, "a", "hi~"]
// 기존의 튜플 타입을 따른다 선언했음에도 불구하고 에러가 발생하지 않고 배열에 요소가 추가됨.
// 이럴때 기존 배열의 인덱스마다 순서와 타입을 완전히 고정시키기 위해 "readonly" 키워드를 사용

let test_tuple2: readonly [number, number, string];
test_tuple2 = [1, 2, "a"]
// test_tuple2.push("hi~");   // 'readonly [number, number, string]' 형식에 'push' 속성이 없습니다.  에러가 발생함.
console.log(test_tuple2);


