// 字符串转元组
type StringToTurple<T, Prev extends string[] = []> = T extends `${infer L}${infer R}`? StringToTurple<R, [...Prev, ]> : Prev;
type  A30 = StringToTurple<'abc'>; // ['a', 'b', 'c']
type  B30 = StringToTurple<''>; // []

// 元组转字符串
type TurpleToString<T, Prev extends string = ''> = 
T extends [infer L extends string , ...infer R] ? TurpleToString<R, `${Prev}${L}`> : Prev;

type A3 = TurpleToString<['a', 'b', 'c']>; // 'abc';
type B3 = TurpleToString<[]>; // '';