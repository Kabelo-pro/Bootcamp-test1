describe('Test my isWeekDay function' , function(){
    it("Write a function called isWeekday that takes a string parameter - to find out if the parameter passed in is a day of the week", function(){
        assert.equal(true, isWeekday("Monday"));

        
    });
    it("Write a function called isWeekday that takes a string parameter - to find out if the parameter passed in is a day of the week", function(){
        assert.equal(false, isWeekday("Sunday"));

        
    });
    it("Write a function called isWeekday that takes a string parameter - to find out if the parameter passed in is a day of the week", function(){
        assert.equal(true, isWeekday("Wednesday"));

        
    });

    it("Write a function called isWeekday that takes a string parameter - to find out if the parameter passed in is a day of the week", function(){
        assert.equal(false, isWeekday("Saturday"));

        
    });
}); 