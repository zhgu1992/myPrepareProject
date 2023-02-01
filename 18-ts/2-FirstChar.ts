type FirstChar<T> = T extends `${infer L}${infer R}` ? L : never;
// 找字符串第一个元素
type A1 = FirstChar<'BFE'>  // B
type B1 = FirstChar<'dev'> // d
type C1 = FirstChar<''> // ""


// 找字符串最后一个元素
// type A3 = 'R' extends `${infer L}${infer R}` ? R: 2;
type LastChar<T, Prev = T> = T extends `${infer L}${infer R}` ? LastChar<R, L> : Prev;
type A2 = LastChar<'BFE'>  // E
type C2 = LastChar<''> // ""



