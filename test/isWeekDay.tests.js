describe('Test my isWeekDay function' , function(){
    it("Finds out if the parameter passed in is a day of the week", function(){
        assert.equal(true, isWeekday("Monday"), "this should not be true");

        
    });
    it("Finds out if the parameter passed in is a day of the week", function(){
        assert.equal(false, isWeekday("Sunday"), "this should not be true");

        
    });
    it("Finds out if the parameter passed in is a day of the week", function(){
        assert.equal(true, isWeekday("Wednesday"), "this should not be true");

        
    });

    it("Finds out if the parameter passed in is a day of the week", function(){
        assert.equal(false, isWeekday("Saturday"), "this should not be true");

        
    });
}); 