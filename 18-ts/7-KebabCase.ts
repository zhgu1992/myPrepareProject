import {CapitalizeString} from './1-CapitalizeString';

type RemoveFirstStr<T> = T extends `${infer L}${infer R}` ? R: T;
// 驼峰转横线
type KebabCase<T, Prev extends string = ''> 
= T extends `${infer L}${infer R}` ? 
( L extends Uppercase<L> ?  KebabCase<R, `${Prev}-${Lowercase<L>}`> : KebabCase<R, `${Prev}${L}`>)
 : RemoveFirstStr<Prev>;

type A7 = KebabCase<'HandleOpenFlag'> // handle-open-flag;
type B7 = KebabCase<'HelloZhgu'>// hello-zhgu


// 横线转驼峰
type CamelCase<T extends string, Prev extends string = ''>
 = T extends `${infer L}-${infer R}` ? CamelCase<R, `${Prev}${CapitalizeString<L>}`> : `${Prev}${CapitalizeString<T>}`;
type A71 = CamelCase<'handle-open-flg'>; //HandleOpenFlag