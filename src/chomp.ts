/***
 * DO NOT MODIFY THIS FILE. Instead, add your tests to test/chomp.test.ts
 *
 * The chomp function takes an input string and a command string.
 * If the input string starts with the command string, it removes
 * the command and any leading whitespace from the input string
 * and returns the result. If the input string does not start with
 * the command string, it returns the input string unchanged.
 */

export type ChompFunction = (input: string, command: string) => string;

export const chomp: ChompFunction[] = [
    function chomp1(input: string, command: string): string {
        const parts = input.split(" ");
        const cmd = parts[0];
        if (cmd === command) {
            return input.slice(command.length).trimStart();
        } else {
            return input;
        }
    },
    function chomp2(input: string, command: string): string {
        if (input.startsWith(command)) {
            return input.slice(command.length).trimStart();
        } else {
            return input;
        }
    },
];

export const chompIncorrect = [
    function chomp3(input: string, command: string): string {
        const parts = input.split(" ");
        const cmd = parts[0];
        if (cmd === command) {
            return parts[1].trimStart();
        } else {
            return input;
        }
    },
    function chomp4(input: string, command: string): string {
        return input.slice(command.length).trimStart();
    },
    function chomp5(input: string, command: string): string {
        if (input.startsWith(command)) {
            return input.slice(command.length);
        } else {
            return input;
        }
    },
    function chomp6(input: string, command: string): string {
        const parts = command.split(" ");
        const cmd = parts[0];
        if (cmd === command) {
            return input.slice(command.length).trimStart();
        } else {
            return input;
        }
    },
];
