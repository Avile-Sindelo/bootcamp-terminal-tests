import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe('Testing the Total Phone Bill function on the terminal', function(){
    it('should test if the function returns the correct phone bill from the given string of services', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('should test if the function returns the correct phone bill from the given string of services', function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it('should test if the function returns the correct phone bill from the given string of services', function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});