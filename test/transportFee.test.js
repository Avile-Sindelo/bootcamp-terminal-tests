import assert from "assert";
import transportFee from "../transportFee.js";

describe('Testing the Transport fee function on the terminal', function(){
    it('should test if the function returns the correct transport fee depending on the entered shift', function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it('should test if the function returns the correct transport fee depending on the entered shift', function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('should test if the function returns the correct transport fee depending on the entered shift', function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });

});