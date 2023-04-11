describe('Test my allFromTown function' , function(){
    it("It should return all the registration numbers in the string that is for that town.", function(){
        assert.equal(['CL 124', 'CL 345', 'CL 341'], allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), "this should not be true");

        
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