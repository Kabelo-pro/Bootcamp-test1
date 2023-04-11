describe('Test my countAllPaarl function' , function(){
    it("takes a parameter string with registration numbers separated with commas and returns all the registration numbers in the string for Paarl", function(){
        assert.equal(["CJ 678 543","CJ 67890"], allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864', "this should not be true");

        
    });

    // it("It should return the number of registration numbers in a string", function(){
    //   assert.equal(5, countRegNumber("CA 182736,CY 523519,CJ 812328, CJ 812328, CJ 812328"), "this should not be true");

      
    // });
    // it("It should return the number of registration numbers in a string", function(){
    //   assert.equal(5, countRegNumber("CA 182736,CY 523519,CJ 812328, CJ 812328, CJ 812328"), "this should not be true");

      
    // });
    // it("It should return the number of registration numbers in a string", function(){
    //   assert.equal(countRegNumber(4, countRegNumber("CA 182736, CA 182736,CJ 812328,CJ 812328"), "this should not be true");

      
    // });
}); 