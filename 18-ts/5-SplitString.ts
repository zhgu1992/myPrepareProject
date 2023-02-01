
// 分割字符串
type SplitString<T, S extends string, Prev extends string[] = []> 
= T extends `${infer L}${S}${infer R}` ? SplitString<R, S, [...Prev, L]> : [...Prev, T];

type A5 = SplitString<'handle-open-flag', '-'> // ['handle', 'open', 'flag']
type B5 = SplitString<'hello.zhgu.com', '.'> // ['hello', 'zhgu', 'com']