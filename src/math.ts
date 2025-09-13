/***
 * DO NOT MODIFY THIS FILE. Instead, add your tests to test/math.test.ts
 *
 * The add function takes two numbers and returns their sum.
 */

export type AddFunction = (a: number, b: number) => number;

export const addCorrect: AddFunction[] = [
    function add1(a: number, b: number): number {
        return a + b;
    },
    function add2(a: number, b: number): number {
        return a - -b;
    },
];
export const addIncorrect = [
    function add3(a: number, b: number): number {
        return a - b;
    },
    function add4(a: number, b: number): number {
        return a * b;
    },
];
