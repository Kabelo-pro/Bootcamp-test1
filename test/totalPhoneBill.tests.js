describe('Test my totalPhoneBill function', function () {
    it("takes in a string calls made and sms's sent. Calculate the total bill for the data provided.", function () {
        assert.deepEqual("R7.45", totalPhoneBill('call, sms, call, sms, sms'), "this should not be true");


    });
    it("takes in a string calls made and sms's sent. Calculate the total bill for the data provided.", function () {
        assert.deepEqual('R3.40', totalPhoneBill('call, sms'), "this should not be true");


    });
    it("takes in a string calls made and sms's sent. Calculate the total bill for the data provided.", function () {
        assert.deepEqual('R6.15', totalPhoneBill('call, sms, call'), "this should not be true");


    });
    it("takes in a string calls made and sms's sent. Calculate the total bill for the data provided.", function () {
        assert.deepEqual('R0.65', totalPhoneBill('sms'), "this should not be true");


    });

});
