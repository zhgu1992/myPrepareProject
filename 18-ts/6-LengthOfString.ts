
// 求字符串长度
type LengthOfString<T, A extends any[] = []> 
= T extends `${infer L}${infer R}`? LengthOfString<R, [...A, null]>: A['length'];

type A6 = LengthOfString<'abcd'> // 4;
type B6 = LengthOfString<''> // 0;