import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe('Testing the function that counts all registration numbers from a given town', function(){
    it('should test if the function returns the correct number of registrations from the specified town', function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        //fromStellies should contains
        assert.equal(fromStellies, 3)
    });

    it('should test if the function returns the correct number of registrations from the specified town', function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        //fromStellies should contains
        assert.equal(fromKuilsriver, 1)
    });
});