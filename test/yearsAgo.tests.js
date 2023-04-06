describe('Test my yearsAgo function' , function(){
    it("It finds out how many years ago that year is from the current year.", function(){
        assert.equal(30, yearsAgo(1993), "this should not be true");

        
    });

    it("It finds out how many years ago that year is from the current year.", function(){
        assert.equal(25, yearsAgo(1998), "this should not be true");

        
    });

    it("It finds out how many years ago that year is from the current year.", function(){
        assert.equal(19, yearsAgo(2004), "this should not be true");

        
    });

    it("It finds out how many years ago that year is from the current year.", function(){
        assert.equal(33, yearsAgo(1990), "this should not be true");

        
    });
}); 