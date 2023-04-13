  describe('Test my countRegNumber function' , function(){
    it("Write a function called countRegNumber that takes in a string parameter that looks like this 'CA 182736,CY 523519,CJ 812328' and returns the number of registration numbers in the string.", function(){
        assert.equal(3, countRegNumber("CA 182736,CY 523519,CJ 812328"));

        
    });

    it("Write a function called countRegNumber that takes in a string parameter that looks like this 'CA 182736,CY 523519,CJ 812328' and returns the number of registration numbers in the string.", function(){
      assert.equal(5, countRegNumber("CA 182736,CY 523519,CJ 812328, CJ 812328, CJ 812328"));

      
    });
    it("Write a function called countRegNumber that takes in a string parameter that looks like this 'CA 182736,CY 523519,CJ 812328' and returns the number of registration numbers in the string.", function(){
      assert.equal(1, countRegNumber("CA 182736"));

      
    });
    it("Write a function called countRegNumber that takes in a string parameter that looks like this 'CA 182736,CY 523519,CJ 812328' and returns the number of registration numbers in the string.", function(){
      assert.equal(4, countRegNumber("CA 182736, CA 182736,CJ 812328,CJ 812328"));

      
    });
}); 