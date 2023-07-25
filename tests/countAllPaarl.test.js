import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";

describe('Testing the countAllPaarl function on the terminal', function(){
    it('should test if the function returns the correct number of registrations from Paarl', function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));   
    });
});