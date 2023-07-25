import greet from "../greet.js";

describe('Bootcamp greet function testing on the terminal', function(){
    it('should test if the function greets the neighbour properly', function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
        assert.equal(greet('Sam'), 'Hello, Sam');
    });
});