import {FindIndex} from './8-FindIndex';

// 元组转枚举
type TurpleToEnum<T extends string[], I = false, Prev = {}>
= {
    readonly [k in T[number]]: I extends true ? FindIndex<T, k> : k
}

type A9 = TurpleToEnum<['Mac', 'Windows']>; // {readonly Mac: 'Mac', readonly Windows: 'Windows'}
type B9 = TurpleToEnum<['Mac', 'Windows'], true>; // {readonly Mac: 0, readonly Windows: 1}

// type TEST = ['Mac', 'Windows'][number];