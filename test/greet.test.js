import assert from "assert";
import greet from "../greet.js";

describe("Greet Function", function(){
    it("Should greet Thobile", function(){
        assert.equal("Hello, Thobile", greet("Thobile"))
    })

    it("Should greet Thandeka", function(){
        assert.equal("Hello, Thandeka", greet("Thandeka"))
    })
})


 