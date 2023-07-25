import assert from "assert";
import checkReg from "../checkReg.js"

describe('CheckReg bootcamp function test', function(){
    it('should test if the given registration belongs to the given city', function(){
        assert.equal(checkReg('DC 55 YU GP', 'GP'), true);
        assert.equal(checkReg('DC 55 YU GP', 'EC'), false);

        assert.equal(checkReg('5566 L', 'L'), true);
        assert.equal(checkReg('5566 L', 'M'), false);

        assert.equal(checkReg('ERT 123 EC', 'EC'), true);
        assert.equal(checkReg('ERT 123 EC', 'GP'), false);

        assert.equal(checkReg('FGT 123 MP', 'MP'), true);
        assert.equal(checkReg('FGT 123 MM', 'MP'), false);
    });
});