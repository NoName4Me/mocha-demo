describe("pow", function () {

    describe("normal test: raises x to power n", () => {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, () => {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    describe("exception test: raises x to power n", () => {
        it(`4 in the power 1.5 is NaN`, function() {
            assert.isNaN(pow(4, 1.5));
        });
        it(`4 in the power -2 is NaN`, () => {
            assert.isNaN(pow(4, 1.5));
        });
    });
});