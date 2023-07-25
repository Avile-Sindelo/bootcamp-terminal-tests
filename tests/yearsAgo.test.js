import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('Testing the Years Ago function on the terminal', function(){
    it('should test if the function returns the correct number of years that have passed since the given year', function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});