describe('Test my greet function' , function(){
    it("Write a function called greet that takes your neighbour’s name as a parameter and returns a greeting message to them looking like this Hello, Janine", function(){
        assert.equal("Hello, Kabelo", greet("Kabelo"));

        
    });
    it("Write a function called greet that takes your neighbour’s name as a parameter and returns a greeting message to them looking like this Hello, Janine", function(){
        assert.equal("Hello, Mukundi", greet("Mukundi"), "this should not be true");

        
    });

    it("Write a function called greet that takes your neighbour’s name as a parameter and returns a greeting message to them looking like this Hello, Janine ", function(){
        assert.equal("Hello, Kenny", greet("Kenny"), "this should not be true");

        
    });
    it("Write a function called greet that takes your neighbour’s name as a parameter and returns a greeting message to them looking like this Hello, Janine ", function(){
        assert.equal("Hello, Mosa", greet("Mosa"), "this should not be true");

        
    });

});