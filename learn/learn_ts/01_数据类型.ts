// 布尔值
let isDone :boolean = false;

//数字
// 和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
let userName: string = "Bob";
userName = "Smith"

let age: number = 30;
let sentence: string = `Hello, my name is ${ userName }, I'll be ${ age + 1} years old next month.`
// console.log(sentence);

// 数组
let nums1: number[] = [1, 2, 3]
let nums2: Array<number> = [1, 2, 3]
// console.log(nums1);
// console.log(nums2);


// 元组
let x: [string, number];
x = ['hello', 10];
// x = [10, 'hello'];
// console.log(x);

// console.log(x[0].substring(1))

// x[0] = 'world';
// console.log(x)

// console.log(x[5].toString());

// 枚举
// enum Color {
//     Red=1, //默认从0开始
//     Green,
//     Blue
// }

// let c: Color = Color.Green
// console.log(c);

// let colorName: string = Color[2]
// console.log(colorName);

// Any
// let notSure: any = 4;
// console.log(notSure);

// notSure = 'maybe a string';
// console.log(notSure);

// notSure = false;
// console.log(notSure);

// notSure.ifItExists();
// notSure.toFixed();

// let prettySure: Object = 4;
// prettySure.toFixed();

// let arr: any = [1, true, 'free'];
// console.log(arr);

// Void
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void

// function warnUser(): void {
//     console.log('This is my warning message');
// }
// warnUser()

// Null 和 Undefined
// let u: undefined = undefined;
// let n: null = null;

// never
// 返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//     throw new Error(message);
// }

// 推断的返回值类型为never
// function fail() {
//     return error("Something failed");
// }

// 返回never的函数必须存在无法达到的终点
// function infiniteLoop(): never {
//     while (true) {
//     }
// }

// Object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
// declare function create(o: object | null): void;

// ok
// create( {prop:0});
// create(null);

// not ok
// create(42);
// create('string');
// create(false);
// create(undefined);

// 类型断言
let someValue: any = 'this is a string';
let strLength1: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
console.log(strLength1)
console.log(strLength2)