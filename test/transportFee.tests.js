
  describe('Test my transportFee function' , function(){
    it("Returns the right price based on the shift you are working", function(){
        assert.equal("R20", transportFee("morning"), "this should not be true");

        
    });
    it("Returns the right price based on the shift you are working", function(){
      assert.equal("R10", transportFee("afternoon"), "this should not be true");

      
    });
    it("Returns the right price based on the shift you are working", function(){
      assert.equal("free", transportFee("nightshift"), "this should not be true");

      
    });
});