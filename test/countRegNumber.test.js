import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('CountRegNumber function tested on the terminal', function(){
    it('should test if the function returns the correct number of registration number', function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });

    it('should test if the function returns the correct number of registration number', function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
});