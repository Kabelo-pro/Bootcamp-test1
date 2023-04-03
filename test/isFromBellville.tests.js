
  describe('Test my isFromBellville function' , function(){
    it("It should return 'True' when called with a registration number that starts with CY", function(){
        assert.equal(true, isFromBellville ("CY 123"), "this should not be true");

        
    });

});