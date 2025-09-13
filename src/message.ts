/***
 * DO NOT MODIFY THIS FILE. Instead, add your tests to test/message.test.ts
 *
 * The Message class is a class with four methods:
 * - getSize() returns the number of characters in the message
 * - getSummary() returns the first 10 characters of the message
 * - getContent() returns the full text of the message
 * - isEmpty() returns true if the message is empty or only whitespace
 *
 */

export abstract class MessageBase {
    constructor(protected text: string) {}
    abstract getSize(): number;
    abstract getSummary(): string;
    abstract getContent(): string;
    abstract isEmpty(): boolean;
}

export type MessageConstructor = new (text: string) => MessageBase;

export const Message: MessageConstructor[] = [
    class Message1 extends MessageBase {
        getSize(): number {
            return this.text.length;
        }
        getSummary(): string {
            return this.text.substring(0, 10);
        }
        getContent(): string {
            return this.text;
        }
        isEmpty(): boolean {
            return this.text.trim().length === 0;
        }
    },
];

export const MessageIncorrect: MessageConstructor[] = [
    class Message2 extends MessageBase {
        getSize(): number {
            return this.getSummary().length;
        }
        getSummary(): string {
            return this.text.substring(0, 10);
        }
        getContent(): string {
            return this.text;
        }
        isEmpty(): boolean {
            return this.text.trim().length === 0;
        }
    },
    class Message3 extends MessageBase {
        getSize(): number {
            return this.text.length;
        }
        getSummary(): string {
            return this.text.substring(0, 10);
        }
        getContent(): string {
            return this.text;
        }
        isEmpty(): boolean {
            return this.text.length === 0;
        }
    },
    class Message4 extends MessageBase {
        getSize(): number {
            return 1;
        }
        getSummary(): string {
            return this.text.substring(0, 10);
        }
        getContent(): string {
            return this.text;
        }
        isEmpty(): boolean {
            return this.text.trim().length === 0;
        }
    },
    class Message5 extends MessageBase {
        getSize(): number {
            return this.text.length;
        }
        getSummary(): string {
            return this.text.substring(0, 10);
        }
        getContent(): string {
            return "";
        }
        isEmpty(): boolean {
            return this.text.trim().length === 0;
        }
    },
];
