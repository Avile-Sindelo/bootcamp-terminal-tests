import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('Bootcamp isFromBellville function testing on the terminal', function(){
    it('should test if the function returns true when the registation is from Bellville, and false otherwise', function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 321'), false);
    });
});