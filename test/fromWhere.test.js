import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('Terminal tests for the From-Where function bootcamp', function(){
    it('should test if the function returns the correct town into which the given registration belongs', function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville');
    });

    it('should test if the function returns the correct town into which the given registration belongs', function(){
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });

    it('should test if the function returns the correct town into which the given registration belongs', function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });

    it('should test if the function returns the correct town into which the given registration belongs', function(){
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
});