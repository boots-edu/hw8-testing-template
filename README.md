# Homework 8- Testing

In this assignment, instead of passing our tests, you have to write your own tests. In the `src/` directory, you will find various implementations of functions and classes. Some are correct, and some are incorrect. If your tests are all good, then they will be:

* **Valid**: All of your tests will pass when provided the correct implementations
* **Thorough**: At least one of your tests will fail or trigger an error when provided an incorrect implementations.

You will only be editing code within the `test/` directory. In particular, for each test file, you need to find the marked sections and ONLY edit the code in that area. Your tests will be run against the various implementations, using the normal `npm run` command.

```typescript
function yourAddTests(add: AddFunction) {
/********************* DO NOT MODIFY BEFORE THIS LINE *************/


    expect(add(0, 0)).toBe(0);
    // You will need to add additional tests here to prove that the
    // correct versions are correct, and the incorrect versions are incorrect.

    
/********************* DO NOT MODIFY AFTER THIS LINE *************/
}
```

Note that the only testing functions you will need to be using are the `expect` function and the `toBe` method. See the example in `math.test.ts` for guidance.

In some cases, you might need to create instances of classes or even define new classes that extend existing ones. However, all of your code needs to go in the marked sections of the `*.test.ts` files.

Remember, you cannot simply edit the `src/` files or change the surrounding test code. Tampering with the autograding code will earn a zero and potentially worse ramifications, since it is technically cheating.