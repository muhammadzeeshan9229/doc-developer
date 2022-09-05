'__copyright__ = "Algomus, Inc. 20XX"'
"use strict";

/* Setup mocha BDD */
let {describe, context, it, specify, before, after, beforeEach, afterEach} = require("mocha");
/* Setup chai expect */
let expect = require("chai").expect;
/* our service (app.js) */
const Service = require("../app.js");

describe("BDD -->", () => {
    beforeEach(() => {
        //Setup happens before each test case
    });

    afterEach(() => {
        //Teardown happens after each test case
    });

    describe("Noun", () => {
        it("should do something on one condition", () => {
            //expect using chai
        });
    
        it("should do something else on one condition", () => {
            //expect using chai
        });
    });
});