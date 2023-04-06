  describe('Test my countRegNumber function' , function(){
    it("It should return the number of registration numbers in a string", function(){
        assert.equal(3, countRegNumber("CA 182736,CY 523519,CJ 812328"), "this should not be true");

        
    });

    it("It should return the number of registration numbers in a string", function(){
      assert.equal(5, countRegNumber("CA 182736,CY 523519,CJ 812328, CJ 812328, CJ 812328"), "this should not be true");

      
    });
    it("It should return the number of registration numbers in a string", function(){
      assert.equal(5, countRegNumber("CA 182736,CY 523519,CJ 812328, CJ 812328, CJ 812328"), "this should not be true");

      
    });
    it("It should return the number of registration numbers in a string", function(){
      assert.equal(4, countRegNumber("CA 182736, CA 182736,CJ 812328,CJ 812328"), "this should not be true");

      
    });
}); 