export type CapitalizeString<T> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}`: T;

// 首字母大写
type A = CapitalizeString<'handler'>  // Handler
type B = CapitalizeString<233> // 233
const a: A = 'Handler';
const b: B = 233;
