
// 重复字符串
// type无法写条件判断，需要使用数组作为辅助通过extends来进行判断
type RepeatString<T extends string, K, A extends any[] = [], Prev extends string = ''> 
= K extends A['length'] ? Prev : RepeatString<T, K, [...A, null], `${Prev}${T}`>

type A4 = RepeatString<'a', 3>; // 'aaa'
type B4 = RepeatString<'a', 0>; // ''