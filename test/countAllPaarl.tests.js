describe('Test my countAllPaarl function' , function(){
    it("Create a function called allPaarl that takes a parameter string with registration numbers separated with commas and returns all the registration numbers in the string for Paarl", function(){
        assert.deepEqual(["CJ 678 543","CJ 67890"], countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'));

        
    });

    it("Create a function called allPaarl that takes a parameter string with registration numbers separated with commas and returns all the registration numbers in the string for Paarl", function(){
      assert.deepEqual(["CJ 678 543","CJ 67890"], countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'));

      
    });
    it("Create a function called allPaarl that takes a parameter string with registration numbers separated with commas and returns all the registration numbers in the string for Paarl", function(){
      assert.deepEqual(["CJ 678 543","CJ 67890", "CJ 3048"], countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864, CJ 3048'));

      
    });
    it("Create a function called allPaarl that takes a parameter string with registration numbers separated with commas and returns all the registration numbers in the string for Paarl", function(){
      assert.deepEqual(["CJ 678 543"], countAllPaarl('CL 900, CJ 678 543, CA 34567, CN 7864'));

      
    });
}); 