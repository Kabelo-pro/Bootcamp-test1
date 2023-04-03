

  describe('Test my regCheck function' , function(){
    it("It should return 'true' when called with a registration number that ends with GP", function(){
        assert.equal(true, regCheck("DV 23 NB GP", "GP"), "this should not be true");

        
    });

}); 