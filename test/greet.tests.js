describe('Test my greet function' , function(){
    it("It should return 'Hello, Kabelo' when called with 'Kabelo' ", function(){
        assert.equal("Hello, Kabelo", greet("Kabelo"), "this should not be true");

        
    });
    it("It should return 'Hello, Mukundi' when called with 'Kabelo' ", function(){
        assert.equal("Hello, Mukundi", greet("Mukundi"), "this should not be true");

        
    });

    it("It should return 'Hello, Kenny' when called with 'Kabelo' ", function(){
        assert.equal("Hello, Kenny", greet("Kenny"), "this should not be true");

        
    });
    it("It should return 'Hello, Kabelo' when called with 'Kabelo' ", function(){
        assert.equal("Hello, Mosa", greet("Mosa"), "this should not be true");

        
    });

});