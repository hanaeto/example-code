import { inspect } from "util";

const regex: RegExp = /such/ig;

const testValue1: string = 'You are such a great!!';
const testValue2: string = 'It was such a nice day';

// DESC 변수화한 객체로 test 실행
console.log( regex.test( testValue1 ) );
console.log( regex.test( testValue2 ) );

console.log( '' );

// DESC 해결 방법
console.log( ( new RegExp( regex ) ).test( testValue1 ) );
console.log( ( new RegExp( regex ) ).test( testValue2 ) );

/*
true
false

true
true
*/