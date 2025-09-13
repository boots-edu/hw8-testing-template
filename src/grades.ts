/***
 * DO NOT MODIFY THIS FILE. Instead, add your tests to test/grades.test.ts
 *
 * The grade function takes a string representing a student name
 * followed by a series of integer grades separated by spaces,
 * and returns the average of the grades as a number.
 * For example, "Alice 90 80 70" should return 80.
 *
 * If there are no grades, the function should return 0.
 */

export type GradesFunction = (student: string) => number;

export const grade: GradesFunction[] = [
    function grade1(student: string): number {
        const values = student.split(" ");
        const grades = values.slice(1);
        if (grades.length === 0) {
            return 0;
        }
        let total = 0;
        for (const grade of grades) {
            total = total + parseInt(grade);
        }
        return total / grades.length;
    },
    function grade2(student: string): number {
        let total = 0;
        const parts = student.split(" ");
        if (parts.length <= 1) {
            return 0;
        }
        for (let i = 1; i < parts.length; i++) {
            total += parseInt(parts[i]);
        }
        return total / (parts.length - 1);
    },
];

export const gradeIncorrect = [
    function grade3(student: string): number {
        const values = student.split(" ");
        const grades = values.slice(1);
        let total = 0;
        if (grades.length === 0) {
            return 0;
        }
        for (const grade of grades) {
            total += parseInt(grade);
        }
        return total;
    },
    function grade4(student: string): number {
        const values = student.split(" ");
        const grades = values.slice(1);
        let total = 0;
        if (grades.length === 0) {
            return 0;
        }
        for (let i = 0; i < grades.length; i += 3) {
            total += parseInt(grades[i]);
        }
        return total;
    },
    function grade5(student: string): number {
        const values = student.split(" ");
        const grades = values.slice(1);
        let total = 0;
        for (const grade of grades) {
            total = total + parseInt(grade);
        }
        return total / grades.length;
    },
];
