// Only edit this file between the DO NOT MODIFY comments
// You must add additional tests to prove that the
// correct versions are correct, and the incorrect versions are incorrect.
import {
    BuildingFunction,
    totalSize,
    totalSizeIncorrect,
    Shack,
    House,
    Apartment,
    Building,
} from "../src/building";

function yourBuildingTests(totalSize: BuildingFunction) {
    /********************* DO NOT MODIFY BEFORE THIS LINE *************/
    // You will need to add tests here to prove that the
    // correct versions are correct, and the incorrect versions are incorrect.
    //
    //
    // Delete this comment, and add your tests here.
    //
    /********************* DO NOT MODIFY AFTER THIS LINE *************/
}

describe("Buildings", () => {
    test.each(totalSize)("Proving %p is correct", yourBuildingTests);
    test.failing.each(totalSizeIncorrect)(
        "Proving %p is incorrect",
        yourBuildingTests
    );
});
