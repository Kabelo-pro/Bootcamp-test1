describe('Test my fromWhere function' , function(){
    it("Write a function that takes a car registration number as a parameter and returns the town the car is from.", function(){
        assert.equal("Bellville", fromWhere("CY"), "this should not be true");

        
    });
    it("Write a function that takes a car registration number as a parameter and returns the town the car is from.", function(){
        assert.equal("Paarl", fromWhere("CJ"), "this should not be true");

        
    });
    it("Write a function that takes a car registration number as a parameter and returns the town the car is from.", function(){
        assert.equal('Cape Town', fromWhere("CA"), "this should not be true");        
    });

});