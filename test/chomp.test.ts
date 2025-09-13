// Only edit this file between the DO NOT MODIFY comments
// You must add additional tests to prove that the
// correct versions are correct, and the incorrect versions are incorrect.
import { ChompFunction, chomp, chompIncorrect } from "../src/chomp";

function yourChompTests(chomp: ChompFunction) {
    /********************* DO NOT MODIFY BEFORE THIS LINE *************/
    // You will need to add tests here to prove that the
    // correct versions are correct, and the incorrect versions are incorrect.
    //
    //
    // Delete this comment, and add your tests here.
    //
    /********************* DO NOT MODIFY AFTER THIS LINE *************/
}

describe("Chomp", () => {
    test.each(chomp)("Proving %p is correct", yourChompTests);
    test.failing.each(chompIncorrect)(
        "Proving %p is incorrect",
        yourChompTests,
    );
});
