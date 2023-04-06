
describe('Test my isFromBellville function', function () {
  it("It should return 'True' when called with a registration number that starts with CY", function () {
    assert.equal(true, isFromBellville("CY 123"), "this should not be true");


  });
  it("It should return 'true' when called with a registration number that starts with CY", function () {
    assert.equal(false, isFromBellville("HDK 374 GP"), "this should not be true");

  });

  it("It should return 'true' when called with a registration number that starts with CY", function () {
    assert.equal(true, isFromBellville("CY 937 293"), "this should not be true");
    
  });

  it("It should return 'true' when called with a registration number that starts with CY", function () {
    assert.equal(false, isFromBellville("YUS 832 MP"), "this should not be true");
    
  });
});