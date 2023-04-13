describe('Test my totalPhoneBill function', function () {
    it("Write a function called totalPhoneBill that takes in a string calls made and sms's sent. Calculate the total bill for the data provided.", function () {
        assert.deepEqual("R7.45", totalPhoneBill('call, sms, call, sms, sms'));


    });
    it("Write a function called totalPhoneBill that takes in a string calls made and sms's sent. Calculate the total bill for the data provided.", function () {
        assert.deepEqual('R3.40', totalPhoneBill('call, sms'));


    });
    it("Write a function called totalPhoneBill that takes in a string calls made and sms's sent. Calculate the total bill for the data provided.", function () {
        assert.deepEqual('R6.15', totalPhoneBill('call, sms, call'));


    });
    it("Write a function called totalPhoneBill that takes in a string calls made and sms's sent. Calculate the total bill for the data provided.", function () {
        assert.deepEqual('R0.65', totalPhoneBill('sms'));


    });

});
