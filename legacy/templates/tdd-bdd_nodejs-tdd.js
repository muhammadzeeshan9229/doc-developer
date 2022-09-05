'__copyright__ = "Algomus, Inc. 20XX"'
"use strict";

/* Setup mocha TDD */
let {suite, setup, test, teardown} = require("mocha");
/* Setup chai assert */
let assert = require("chai").assert;
/* our service (app.js) */
const Service = require("../app.js");

suite("TDD -->", () => {
    setup(() => {
        //Setup happens each test case
    });

    suite("Noun", () => {
        test("should do something on one condition", () => {
            //assert using chai
        });
    
        test("should do something else on one condition", () => {
            //assert using chai
        });

        teardown(() => {
            //Remove/cleanse after each test case
        });
    });
});