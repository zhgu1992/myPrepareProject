// 如何实现Equal
type Equal<T, K> = [T] extends [K] ? ([K] extends [T] ? 
    keyof T extends keyof K ? (keyof K extends keyof T ? true : false) : false 
: false): false ;
type A80 = Equal<any, 1>; // false
type B80 = Equal<1, 1>; // true
type C80 = Equal<never, never>; // true

// 找数组中某元素的索引
export type FindIndex<T, K, A extends any[] = []>
 = T extends [infer L, ... infer R] ? 
 (Equal<L, K> extends true ? A['length'] : FindIndex<R, K, [...A, null]>)
  : never;

type A = [any, never, 1, '2', 5];
type A8 = FindIndex<A, 1>; // 2
type B8 = FindIndex<A, -1>; // never