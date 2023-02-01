// 数组slice

type Slice<T extends any[], start, end extends number = T['length'], result extends any[] = [], arrStart extends any[] = [], arrEnd extends any[] = []> 
= T extends [infer L, ... infer R] ? 
(arrStart['length'] extends start ? 
(arrEnd['length'] extends end ? result
:Slice<R, start, end, [...result, L], arrStart, [...arrEnd, null]>) : 
 Slice<R, start, end, result, [...arrStart, null], [...arrEnd, null]> )
: result;



type A10 = Slice< [1,2,3,4,5], 1, 4>; // [2, 3, 4] 

