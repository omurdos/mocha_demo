const assert = require("assert");
//Testing basic mathmatics...
//Adding two numbers..
//Substracting two numbers..
//Dividing two numbers..
//Multiply two numbers..

describe("Mathmatical testing", function(){
    it.skip("Addition of two number", ()=>{
        var a = 10;
        var b = 10;
        var result = a + b;
        assert.equal(result, 20);
    });
    it("Substraction of two number", ()=>{
        var a = 10;
        var b = 10;
        var result = a - b;
        assert.equal(result, 0);
    });
    it("Division of two number", ()=>{
        var a = 10;
        var b = 10;
        var result = a / b;
        assert.equal(result, 1);
    });
    it("Multiplication of two number", ()=>{
        var a = 10;
        var b = 10;
        var result = a * b;
        assert.equal(result, 100);
    });
});